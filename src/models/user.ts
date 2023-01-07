// @ts-ignore
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import db from '../database';

dotenv.config();

export type User = {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export class UserModel {
  async index(): Promise<User[]> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT id,email, firstName, lastName FROM users';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }

  async signUp(u: User): Promise<User> {
    try {
      const sql = `INSERT INTO users (email, firstName ,lastName ,password) VALUES($1, $2, $3, $4) RETURNING *`;
      const conn = await db.connect();

      const hash = bcrypt.hashSync(
        u.password + process.env.BCRYPT_PASSWORD,
        parseInt(process.env.SALT_ROUNDS as string)
      );
      const result = await conn.query(sql, [
        u.email,
        u.firstName,
        u.lastName,
        hash,
      ]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (err) {
      throw new Error(`Could not add new user ${u.firstName}. Error: ${err}`);
    }
  }
  async logIn(email: string, password: string): Promise<User | null> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT password FROM users WHERE email=($1)';

      const result = await conn.query(sql, [email]);
      if (result.rows.length) {
        const user = result.rows[0];
        // console.log(user);
        if (
          bcrypt.compareSync(
            password + process.env.BCRYPT_PASSWORD,
            user.password
          )
        ) {
          return user;
        }
      }
      conn.release();

      return null;
    } catch (err) {
      throw new Error(`log in error. Error: ${err}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const sql =
        'SELECT id, email, firstName, lastName FROM users WHERE id=($1)';
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user with id ${id}. Error: ${err}`);
    }
  }
}
