module.exports = {
  "development": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASS,
    "database": process.env.DEV_DB_NAME,
    "host": "127.0.0.1",
    "port": process.env.DEV_DB_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.TEST_DB_USER,
    "password": process.env.TEST_DB_PASS,
    "database": process.env.TEST_DB_NAME,
    "host": "127.0.0.1",
    "port": process.env.TEST_DB_PORT,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PROD_DB_USER,
    "password": process.env.PROD_DB_PASS,
    "database": process.env.PROD_DB_NAME,
    "host": "127.0.0.1",
    "port": process.env.PROD_DB_PORT,
    "dialect": "postgres"
  }
};
