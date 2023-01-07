import authHandler from '../handlers/authHandler';
import errorHandler from '../handlers/errorHandler';
import mainHandler from '../handlers/mainHandler';
import proHandler from '../handlers/proHandler';
import * as controllers from '../handlers/orderHandler';
import * as handlers from '../handlers/productHandler';
import * as userHandlers from '../handlers/userHandler';

describe('authHandler', () => {
  it('event handler exist', async () => {
    expect(authHandler).toBeDefined();
  });
});

describe('errorHandler', () => {
  it('event handler exist', async () => {
    expect(errorHandler).toBeDefined();
  });
});
describe('mainHandler', () => {
  it('event handler exist', async () => {
    expect(mainHandler).toBeDefined();
  });
});
describe('proHandler', () => {
  it('event handler exist', async () => {
    expect(proHandler).toBeDefined();
  });
});

describe('orderHandler', () => {
  it('Order Handler exist', async () => {
    expect(controllers.index).toBeDefined();
  });
});
describe('orderHandler', () => {
  it('Order Handler exist', async () => {
    expect(controllers.show).toBeDefined();
  });
});
describe('orderHandler', () => {
  it('Order Handler exist', async () => {
    expect(controllers.addProduct).toBeDefined();
  });
});
describe('orderHandler', () => {
  it('Order Handler exist', async () => {
    expect(controllers.create).toBeDefined();
  });
});
describe('orderHandler', () => {
  it('Order Handler exist', async () => {
    expect(controllers.deleteProduct).toBeDefined();
  });
});
describe('orderHandler', () => {
  it('Order Handler exist', async () => {
    expect(controllers.showCart).toBeDefined();
  });
});
describe('productHandler', () => {
  it('product Handler exist', async () => {
    expect(handlers.create).toBeDefined();
  });
});
describe('productHandler', () => {
  it('product Handler exist', async () => {
    expect(handlers.deleteProduct).toBeDefined();
  });
});
describe('productHandler', () => {
  it('product Handler exist', async () => {
    expect(handlers.index).toBeDefined();
  });
});
describe('productHandler', () => {
  it('product Handler exist', async () => {
    expect(handlers.show).toBeDefined();
  });
});
describe('productHandler', () => {
  it('product Handler exist', async () => {
    expect(handlers.update).toBeDefined();
  });
});
describe('userHandler', () => {
  it('user Handler exist', async () => {
    expect(userHandlers.index).toBeDefined();
  });
});
describe('userHandler', () => {
  it('user Handler exist', async () => {
    expect(userHandlers.logIn).toBeDefined();
  });
});
describe('userHandler', () => {
  it('user Handler exist', async () => {
    expect(userHandlers.protect).toBeDefined();
  });
});
describe('userHandler', () => {
  it('user Handler exist', async () => {
    expect(userHandlers.show).toBeDefined();
  });
});
describe('userHandler', () => {
  it('user Handler exist', async () => {
    expect(userHandlers.signUp).toBeDefined();
  });
});
