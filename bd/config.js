require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: "mysql",
    timezone: process.env.TIMEZONE || '-04:00',
    logging: false,
    operatorsAliases: 0 
  },
  test: {
    username: "root",
    password: null,
    database: "",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "-03:00"
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: "mysql",
    timezone: process.env.TIMEZONE || '-03:00',
    operatorsAliases: 0,
    logging: false
  }
};
