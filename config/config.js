require('dotenv').config();
module.exports = {
  development: {
    username: "postgres",
    password: "docker",
    database: "books",
    host: "172.17.0.2", // docker inspect (postgresql container ipsini ver) 
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
