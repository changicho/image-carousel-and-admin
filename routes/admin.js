var express = require("express");
var router = express.Router();

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

/* GET Login page. */
router.get("/login", function(req, res, next) {
	res.render("admin-login.html");
});

/* GET Signup page. */
router.get("/signup", function(req, res, next) {
	res.render("admin-signup.html");
});

/* GET List page. */
router.get("/index", function(req, res, next) {
	res.render("admin-list.html");
});

/* GET Authorization page. */
router.get("/authorization", function(req, res, next) {
	res.render("admin-authorization.html");
});

/* GET Insert Upper Card page. */
router.get("/insert_upper_card", function(req, res, next) {
	res.render("insert_upper_card.html");
});

/* GET Insert Upper Slide page. */
router.get("/insert_upper_slide", function(req, res, next) {
	res.render("insert_upper_slide.html");
});

/* GET Insert Down Slide page. */
router.get("/insert_down_slide", function(req, res, next) {
	res.render("insert_down_slide.html");
});

/* GET File Upload page. */
router.get("/upload", function(req, res, next) {
	res.render("admin-upload.html");
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

router.post("/get_user_list", function(req, res, next) {
	connection.query("select id, admin from user;", (err, rows, fields) => {
		let stringfy = JSON.stringify(rows);
		res.send(JSON.parse(stringfy));
	});
});

router.post("/get_admin_list", function(req, res, next) {
	let _json_data = {
		user: [],
		upcard_card: [],
		upcard_slide: [],
		down_slide: [],
	};

	connection.query("select id, admin from user;", (err, rows, fields) => {
		let stringfy = JSON.stringify(rows);
		_json_data.user = JSON.parse(stringfy);
	});

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

router.post("/insert_data", function(req, res, next) {
	// console.log(req.body);
	let json = req.body;
	let datas = [];
	let tables = Object.getOwnPropertyNames(json);

	for (key in json) {
		datas.push(`"${json[key]}"`);
	}
	tables.splice(0, 1);
	datas.splice(0, 1);

	let table_str = tables.join(", ");
	let data_str = datas.join(", ");

	// console.log(table_str, data_str);

	let query = `INSERT INTO ${json.table_name} (${table_str}) VALUES (${data_str});`;

	console.log(query);
	connection.query(query, function(err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	});

	res.redirect("./index");
});

module.exports = router;
