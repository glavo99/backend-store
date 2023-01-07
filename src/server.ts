import express, { Request, response, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/users.routes';
import orderRoutes from './routes/orders.routes';
import productRoutes from './routes/products.routes';
// import client from './database';

const app: express.Application = express();

dotenv.config();

const port = process.env.port;

app.use(bodyParser.json());

// client.connect();

// client.query('SELECT NOW()', (err: Error, res: any) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end;
// });

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
