var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/ver1', function(req, res, next) {
  res.render('carousel_v1.html');
});

module.exports = router;
