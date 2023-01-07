import db from '../database';

export type Order = {
  id?: string;
  status: string;
  user_id: string;
};

export class OrderModel {
  async index(): Promise<Order[]> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * FROM orders';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`);
    }
  }

  async createProduct(
    quantity: number,
    orderId: string,
    productId: string
  ): Promise<Order> {
    try {
      const sql = `INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *`;
      const conn = await db.connect();

      const result = await conn.query(sql, [quantity, orderId, productId]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(
        `Could not add product ${productId} to order ${orderId}. Error: ${err}`
      );
    }
  }

  async create(order: Order): Promise<Order> {
    try {
      const sql = `INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *`;
      const conn = await db.connect();

      const result = await conn.query(sql, [order.status, order.user_id]);

      const newOrder = result.rows[0];

      conn.release();

      return newOrder;
    } catch (err) {
      throw new Error(`Could not add new order. Error: ${err}`);
    }
  }
  async show(id: string): Promise<Order> {
    try {
      const sql =
        'SELECT status, email, firstname, lastname FROM users INNER JOIN orders ON users.id = orders.user_id WHERE orders.id=($1);';
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user with id ${id}. Error: ${err}`);
    }
  }
  async delete(id: string): Promise<null> {
    try {
      const sql = 'DELETE FROM order_products WHERE id=($1)';
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return null;
    } catch (err) {
      throw new Error(`Could not find product with id ${id}. Error: ${err}`);
    }
  }
  async showCart(id: string): Promise<Order> {
    try {
      const sql =
        'SELECT quantity, name, price, status, user_id FROM order_products INNER JOIN products ON products.id = order_products.product_id INNER JOIN orders ON orders.id = order_products.order_id WHERE order_products.id =($1);';

      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user with id ${id}. Error: ${err}`);
    }
  }
}
