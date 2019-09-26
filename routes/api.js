var express = require("express");
var router = express.Router();
var multer = require("multer"); // express에 multer모듈 적용 (for 파일업로드)
var mysql = require("mysql");

/**
 * set mysql
 */
var connection = mysql.createConnection({
	host: "localhost",
	user: "amazon_api",
	password: "pass1234",
	port: 3306,
	database: "amazon",
});
connection.connect();

/**
 * set multer (file upload)
 */
const upload = multer({
	storage: multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, "public/static_root");
		},
		filename: function(req, file, cb) {
			cb(null, file.originalname);
		},
	}),
});

router.post("/get_data", function(req, res, next) {
	let _json_data = {
		card_data: {
			card: [],
			slide: [],
		},
		slide_data: {
			slide: [],
		},
	};

	connection.query(
		"select theme, title from upside_card order by card_index;",
		(err, rows, fields) => {
			let stringfy = JSON.stringify(rows);
			_json_data.card_data.card = JSON.parse(stringfy);
		}
	);

	let query = `select * from upside_slide order by card_index;`;
	connection.query(query, (err, rows, fields) => {
		let stringfy = JSON.stringify(rows);
		let json = JSON.parse(stringfy);

		_json_data.card_data.slide = json;
	});

	connection.query("select * from downside_slide;", (err, rows, fields) => {
		let stringfy = JSON.stringify(rows);
		_json_data.slide_data.slide = JSON.parse(stringfy);

		res.send(_json_data);
	});
});

router.post("/upload", upload.single("userfile"), function(req, res) {
	res.redirect("../admin/index"); // object를 리턴함
	console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
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
		"select card_index, theme, title from upside_card;",
		(err, rows, fields) => {
			let stringfy = JSON.stringify(rows);
			_json_data.upcard_card = JSON.parse(stringfy);
		}
	);

	connection.query(
		"select card_index, theme, keyword, title, image_url from upside_slide;",
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

	res.redirect("/admin/index");
});

// authorization
// query : `UPDATE user SET admin="${boolean}" WHERE  id="${data.id}";`
router.post("/authorization", function(req, res, next) {
	// console.log(req.body);
	data = req.body;
	let boolean = "true";
	let query = `UPDATE user SET admin="${boolean}" WHERE  id="${data.id}";`;

	connection.query(query, function(err, result) {
		if (err) throw err;
		console.log("update 1 record");
	});
	res.redirect("back");
});

module.exports = router;
