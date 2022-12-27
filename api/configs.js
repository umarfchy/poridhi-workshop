"use strict";

// configs
export const PORT = process.env.PORT || 5000;

// db configs
const sqlHost = process.env.MYSQL_HOST || "localhost";
const sqlUser = process.env.MYSQL_USERNAME || "root";
const sqlPassword = process.env.MYSQL_PASSWORD || "mypassword";
const sqlDatabase = process.env.MYSQL_DATABASE || "mydb";
export const sqlTable = process.env.MYSQL_TABLE || "mytable";

// configs
export const dbConfigs = {
  host: sqlHost,
  user: sqlUser,
  password: sqlPassword,
  database: sqlDatabase,
};
