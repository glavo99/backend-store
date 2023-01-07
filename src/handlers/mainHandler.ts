import { Request, Response } from 'express';
import * as OrderModel from '../models/order';
const orderModel = new OrderModel.OrderModel();

const mainHandler = (
  data: OrderModel.Order[] | OrderModel.Order | null,
  req: Request,
  res: Response
) => {
  if (data) {
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

export default mainHandler;