import db from '../database';

export type Product = {
  id?: string;
  name: string;
  price: number;
};

export class ProductModel {
  async index(): Promise<Product[]> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * FROM products';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }
  async create(product: Product): Promise<Product> {
    try {
      const sql = `INSERT INTO products (name, price) VALUES($1, $2) RETURNING *`;
      const conn = await db.connect();

      const result = await conn.query(sql, [product.name, product.price]);

      const newProduct = result.rows[0];

      conn.release();

      return newProduct;
    } catch (err) {
      throw new Error(`Could not add new Product. Error: ${err}`);
    }
  }
  async show(id: string): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      // @ts-ignore
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find product with id ${id}. Error: ${err}`);
    }
  }
  async delete(id: string): Promise<null> {
    try {
      const sql = 'DELETE FROM products WHERE id=($1)';
      // @ts-ignore
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return null;
    } catch (err) {
      throw new Error(`Could not find product with id ${id}. Error: ${err}`);
    }
  }
  async update(price: number, id: string): Promise<Product> {
    try {
      const sql = `UPDATE products SET price=($1) WHERE id=($2) RETURNING *;`;
      const conn = await db.connect();

      const result = await conn.query(sql, [price, id]);

      const newProduct = result.rows[0];

      conn.release();

      return newProduct;
    } catch (err) {
      throw new Error(`Could not add new Product. Error: ${err}`);
    }
  }
}
