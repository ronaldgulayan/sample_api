const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8081;
const db = mysql.createConnection({
  host: "64.224.96.84",
  user: "ron",
  password: "ron02",
  database: "sample",
});

app.get("/api/get_info", (req, res) => {
  const sql = "SELECT * FROM info;";

  db.query(sql, function (error, result) {
    if (error) return res.json({ status: "error", data: error });
    return res.json({ status: "success", data: result });
  });
});

app.listen(PORT, () => {
  console.log("Server is now running on port " + PORT);
});
