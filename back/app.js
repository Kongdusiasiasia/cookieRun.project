const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mysql2 = require("mysql2");

const PORT = 4000;

const app = express();

app.listen(PORT, () => {
  console.log(`${PORT} server start!`);
});

