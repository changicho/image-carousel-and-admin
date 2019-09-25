var express = require("express");
var router = express.Router();

/**
 * set axios
 */
const axios = require("axios");

/**
 * set mysql
 */
var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	user: "amazon_api",
	password: "pass1234",
	port: 3306,
	database: "amazon",
});
connection.connect();

/* GET Admin page. */
router.get("/", function(req, res, next) {
	res.render("admin-login.html");
});

/* GET List page. */
router.get("/index", function(req, res, next) {
	res.render("admin-list.html");
});

router.post("/check_id", function(req, res, next) {
	connection.query(
		`select * from user where id='${req.body.id || "EMPTY"}';`,
		(err, rows, fields) => {
			if (err) {
				console.log("Error while performing Query.", err);
				res.send("error");
			}
			let is_match = false;

			let stringfy = JSON.stringify(rows);
			let json = JSON.parse(stringfy);

			if (req.body.password == json[0].password) {
				console.log("match");
				is_match = true;
			} else {
				console.log("not match");
			}

			res.send({ data: is_match });
		}
	);
});

router.post("/get_admin_list", function(req, res, next) {
  let _json_data = {
    upcard_card: [],
    upcard_slide: [],
    down_slide: [],
  };
  
  connection.query(
		"select theme, title from upside_card;",
		(err, rows, fields) => {
			let stringfy = JSON.stringify(rows);
			_json_data.upcard_card = JSON.parse(stringfy);
		}
  );
  
  connection.query(
		"select theme, keyword, title, image_url from upside_slide;",
		(err, rows, fields) => {
			let stringfy = JSON.stringify(rows);
			_json_data.upcard_slide = JSON.parse(stringfy);
		}
  );
  
  connection.query(
		"select color, image_url, link_url from downside_slide;",
		(err, rows, fields) => {
			let stringfy = JSON.stringify(rows);
      _json_data.down_slide = JSON.parse(stringfy);
      
      res.send(_json_data);
		}
	);
});

router.post("/get_detail", function(req, res, next) {
  let json = req.body;
  
  connection.query(
		`select * from ${table_name} where ${query_where};`,
		(err, rows, fields) => {
			let stringfy = JSON.stringify(rows);
			_json_data.upcard_card = JSON.parse(stringfy);
		}
  );
  
  res.send(data);
});

module.exports = router;
