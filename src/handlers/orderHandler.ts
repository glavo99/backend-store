import { Request, Response } from 'express';
import * as OrderModel from '../models/order';
import errorHandler from './errorHandler';
import mainHandler from './mainHandler';

const orderModel = new OrderModel.OrderModel();

export const index = async (req: Request, res: Response) => {
  try {
    const data = await orderModel
      .index()
      .then((result) => mainHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const data = await orderModel
      .show(req.params.id)
      .then((result) => mainHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const data = await orderModel
      .create(req.body)
      .then((result) => mainHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};
export const addProduct = async (req: Request, res: Response) => {
  try {
    const orderId: string = req.params.id;
    const productId: string = req.body.productId;
    const quantity: number = parseInt(req.body.quantity);
    const data = await orderModel
      .createProduct(quantity, orderId, productId)
      .then((result) => mainHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const data = await orderModel
      .delete(req.params.id)
      .then((result) => mainHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};

export const showCart = async (req: Request, res: Response) => {
  try {
    const data = await orderModel
      .showCart(req.params.id)
      .then((result) => mainHandler(result, req, res));
  } catch (error) {
    errorHandler(error as Error, req, res);
  }
};
