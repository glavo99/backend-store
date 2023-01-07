import { NextFunction, Request, Response } from 'express';
import * as UserModel from '../models/user';

const userModel = new UserModel.UserModel();

const authHandler = (
  data: UserModel.User[] | UserModel.User | null,
  req: Request,
  res: Response
) => {
  if (data) {
    console.log(data);
    res.send({
      status: 'success',

      data: { ...data },
    });
  } else {
    res.send({
      status: 'success',
    });
  }
};

export default authHandler;
