CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
  );