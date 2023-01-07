import { Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response) => {
  res.status(404).json({ message: err.message });
};

export default errorHandler;
