var express = require("express");
var router = express.Router();
var fs = require("fs");



// console.log(data);

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/get_data", function(req, res, next) {
  fs.readFile("./public/data/data.json", "utf8", function(err, contents) {
    res.send(contents);
  });
});

module.exports = router;
