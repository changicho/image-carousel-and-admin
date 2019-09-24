var express = require("express");
var router = express.Router();
var fs = require("fs");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "amazon_api",
  password: "pass1234",
  port: 3306,
  database: "amazon"
});

connection.connect();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/get_data", function(req, res, next) {
  fs.readFile("./public/data/data.json", "utf8", function(err, contents) {
    res.send(contents);
  });
});

router.post("/check_id", function(req, res, next) {
  connection.query("select * from user where id='hello'", (err, rows, fields) => {
    let json;

    if (!err) {
      stringfy = JSON.stringify(rows);
      json = JSON.parse(stringfy);

      console.log(json);
    } else {
      console.log("Error while performing Query.", err);
    }
    res.send(json);
  });
});

module.exports = router;
