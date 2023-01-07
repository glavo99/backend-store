import { Request, Response } from 'express';

import * as ProductModel from '../models/product';
const productModel = new ProductModel.ProductModel();

const proHandler = (
  data: ProductModel.Product[] | ProductModel.Product | null,
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



export default proHandler;