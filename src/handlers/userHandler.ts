import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as UserModel from '../models/user';
import errorHandler from './errorHandler';
import authHandler from './authHandler';

dotenv.config();

const userModel = new UserModel.UserModel();

const signToken = (id: UserModel.User | string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as unknown as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const user = await userModel.signUp(req.body);
    const tokenHelp = user.password as string;
    const token = signToken(tokenHelp);
    res.send({
      status: 'success',
      data: {
        email: user.email,
        token,
      },
    });
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};
export const index = async (req: Request, res: Response) => {
  try {
    const data = await userModel
      .index()
      .then((result) => authHandler(result, req, res));
  } catch (err) {
    errorHandler(err as Error, req, res);
  }
};
export const show = async (req: Request, res: Response) => {
  try {
    const data = await userModel
      .show(req.params.id)
      .then((result) => authHandler(result, req, res));
  } catch (err) {
    errorHandler(err as Error, req, res);
  }
};
export const logIn = async (req: Request, res: Response) => {
  try {
    const user = await userModel.logIn(req.body.email, req.body.password);
    // console.log(user);

    if (user) {
      const token = signToken(user);
      res.send({
        status: 'success',
        message: 'logged in successfully',
        data: { token },
      });
    } else {
      res.send({
        status: 'failed',
        message: 'wrong email or password',
      });
    }
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //1) getting token and checking if it is there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    // console.log(token);
  }

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      message: 'plzz login first',
    });
  }
  //2) verification token
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as unknown as string
    );
  } catch (err) {
    // console.log(err);
    return res.status(401).json({
      status: 'fail',
      message: 'Token has expired or wrong Token',
    });
  }
  next();
};
