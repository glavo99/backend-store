import { Request, Response } from 'express';
import * as ProductModel from '../models/product';
import errorHandler from './errorHandler';
import proHandler from './proHandler';

const productModel = new ProductModel.ProductModel();

export const index = async (req: Request, res: Response) => {
  try {
    const data = await productModel
      .index()
      .then((result) => proHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const data = await productModel
      .create(req.body)
      .then((result) => proHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const product = await productModel
      .show(req.params.id)
      .then((result) => proHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel
      .delete(req.params.id)
      .then((result) => proHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const product = await productModel
      .update(req.body.price, req.params.id)
      .then((result) => proHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};
