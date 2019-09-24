var express = require("express");
var router = express.Router();

var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	user: "amazon_api",
	password: "pass1234",
	port: 3306,
	database: "amazon",
});

connection.connect();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("admin-login.html");
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

router.post("/get_downside_slide", function(req, res, next) {
	connection.query("select * from downside_slide", (err, rows, fields) => {
		let stringfy = JSON.stringify(rows);
		let json = JSON.parse(stringfy);
		res.send({ data: json });
	});
});

router.post("/get_upside_card", function(req, res, next) {
	connection.query("select * from upside_card", (err, rows, fields) => {
		let stringfy = JSON.stringify(rows);
		let json = JSON.parse(stringfy);
		res.send({ data: json });
	});
});

router.post("/get_upside_slide", function(req, res, next) {
	connection.query("select * from upside_slide", (err, rows, fields) => {
		let stringfy = JSON.stringify(rows);
		let json = JSON.parse(stringfy);
		res.send({ data: json });
	});
});

module.exports = router;
