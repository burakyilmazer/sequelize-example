require('dotenv').config();
module.exports = {
  development: {
    username: "burak",
    password: "123456",
    database: "books",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "burak",
    password: "123456",
    database: "books",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "burak",
    password: "123456",
    database: "books",
    host: "127.0.0.1",
    dialect: "postgres"
  }
}
