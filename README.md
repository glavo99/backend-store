# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Environment variables

- port=3000
- ENV=dev
- POSTGRES_HOST=127.0.0.1
- POSTGRES_PORT=5432
- POSTGRES_DB=store_dev
- POSTGRES_TEST_DB=store_test
- POSTGRES_USER=<user>
- POSTGRES_PASSWORD=<password>
- BCRYPT_PASSWORD=french-defense-is-solid
- SALT_ROUNDS=10
- JWT_SECRET=spanish-game-should-always-be-considered
- JWT_EXPIRES_IN=90d

## project setup instructions

Set up database through PSQL terminal

- CREATE DATABASE store_dev;
- CREATE DATABASE store_test;

first add environment variables as .env file to the root directory
run npm install to recover npm files for dependencies and dev-dependencies
npm run migrate-up
npm run start-dev
open post man and check the api endpoints as shown in requirements
