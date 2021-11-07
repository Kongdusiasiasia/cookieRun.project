const mysql2 = require("mysql2");

const db = mysql2.createPool({
  port: "",
  host: "",
  database: "",
  user: "",
  password: "",
});

module.exports = db;
