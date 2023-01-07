## API Endpoints

If token required first sign up or login to get a token and provide the token in the header as follows:
key => Authorization
value => Bearer <token>

#### Products

- Index get http://localhost:3000/api/products
- showProduct get http://localhost:3000/api/products/<id>
- createProduct post http://localhost:3000/api/products [token required]
  body should contain name and price
- updateProduct patch http://localhost:3000/api/products/<id> [token required]
  body should contain price
- deleteProduct delete http://localhost:3000/api/products/<id> [token required]

#### Users

- signUp post http://localhost:3000/api/users
  body should contain email firstName lastName password
- logIn post http://localhost:3000/api/users/login
  body should contain email password
- Index get http://localhost:3000/api/users [token required]
- ShowUser get http://localhost:3000/api/users/<id> [token required]

#### Orders

- createOrder post http://localhost:3000/api/orders [token required]
  body should contain status user_id
- createCart post http://localhost:3000/api/orders/<order_id>/products [token required]
  body should contain productId quantity
- showCart get http://localhost:3000/api/orders/<cart_id>/products [token required]
- deleteCart delete http://localhost:3000/api/orders/<cart_id>/products [token required]
- indexOrders get http://localhost:3000/api/orders [token required]
- showOrder get http://localhost:3000/api/orders/<order_id> [token required]

## Data Shapes

#### Product

- id SERIAL PRIMARY KEY
- name VARCHAR
- price integer

#### User

- id SERIAL PRIMARY KEY
- firstName VARCHAR
- lastName VARCHAR
- password VARCHAR

#### Orders

- id SERIAL PRIMARY KEY
- user_id bigint REFERENCES users(id)
- status VARCHAR

#### order_products

- id SERIAL PRIMARY KEY
- quantity integer
- order_id bigint REFERENCES orders(id),
- product_id bigint REFERENCES products(id)
