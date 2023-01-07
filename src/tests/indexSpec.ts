import supertest from 'supertest';

import app from '../server';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

const request2 = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request2.get('/api/users');
    expect(response.status).toBe(401);
  });
});
const request3 = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request3.get('/api/orders');
    expect(response.status).toBe(401);
  });
});
const request4 = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request4.get('/api/products');
    expect(response.status).toBe(200);
  });
});
