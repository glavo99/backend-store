import * as UserModel from '../models/user';
import * as ProductModel from '../models/product';
import * as OrderModel from '../models/order';

const userModel = new UserModel.UserModel();
const productModel = new ProductModel.ProductModel();
const orderModel = new OrderModel.OrderModel();

describe('User Model', () => {
  it('should have an index method', () => {
    expect(userModel.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(userModel.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(userModel.signUp).toBeDefined();
  });

  it('should have a logIn method', () => {
    expect(userModel.logIn).toBeDefined();
  });

  it('create user successfully', async () => {
    const user = await userModel.signUp({
      email: 'glavo1@gmail.com',
      firstName: 'glavo',
      lastName: 'yoyo',
      password: '12345678',
    });
    expect(user.email).toEqual('glavo1@gmail.com');
  });
  it('get users index', async () => {
    const user = await userModel.index();
    expect(user[0].email).toEqual('glavo1@gmail.com');
  });
  it('log in user', async () => {
    const user = await userModel.logIn('glavo1@gmail.com', '12345678');
    expect(user).toBeDefined();
  });
  it('show user', async () => {
    const user = await userModel.show('1');
    expect(user.email).toEqual('glavo1@gmail.com');
  });
  it('create product successfully', async () => {
    const product = await productModel.create({
      name: 'cream',
      price: 200,
    });
    expect(product.name).toEqual('cream');
  });
  it('update product successfully', async () => {
    const product = await productModel.update(100, '1');
    expect(product.price).toEqual(100);
  });
  it('get products index', async () => {
    const products = await productModel.index();
    expect(products[0].name).toEqual('cream');
  });
  it('show product', async () => {
    const product = await productModel.show('1');
    expect(product.name).toEqual('cream');
  });
  it('create order successfully', async () => {
    const order = await orderModel.create({ status: 'active', user_id: '1' });
    expect(order.status).toEqual('active');
  });
  it('get orders index', async () => {
    const orders = await orderModel.index();
    expect(orders[0].status).toEqual('active');
  });
  it('show order', async () => {
    const order = await orderModel.show('1');
    expect(order.status).toEqual('active');
  });
  it('create cart successfully', async () => {
    const cart = await orderModel.createProduct(20, '1', '1');
    expect(cart).toBeDefined();
  });
  it('show cart', async () => {
    const cart = await orderModel.showCart('1');
    expect(cart.status).toEqual('active');
  });
  it('delete cart', async () => {
    const cart = await orderModel.delete('1');
    expect(cart).toEqual(null);
  });
  it('delete product', async () => {
    const product = await productModel.delete('1');
    expect(product).toEqual(null);
  });
});
