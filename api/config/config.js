require("dotenv").config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
module.exports = {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE_DEV || "database_development",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "postgres",
    port: process.env.DB_PORT || 5432,
  },
  test: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE_TEST || "database_test",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "postgres",
    port: process.env.DB_PORT || 5432,
  },
  production: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE_PROD || "database_production",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "postgres",
    port: process.env.DB_PORT || 5432,
  },
};
