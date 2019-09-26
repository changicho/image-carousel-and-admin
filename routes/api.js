var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/get_data", function(req, res, next) {
  fs.readFile("./public/data/data.json", "utf8", function(err, contents) {
    res.send(contents);
  });
});

var multer = require("multer"); // express에 multer모듈 적용 (for 파일업로드)
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

router.post("/upload", upload.single("userfile"), function(req, res) {
  console.log(req.body);
  res.redirect("../admin/index"); // object를 리턴함
	console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
});

module.exports = router;
