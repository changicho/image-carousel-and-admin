var express = require("express");
var router = express.Router();

/* GET Admin page. */
router.get("/", function(req, res, next) {
	// console.log(req.session);
	// console.log(req.user);
	if (req.user === undefined) {
		res.redirect("/admin/index");
	} else {
		res.redirect("/admin/login");
	}
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
	if (req.user === undefined) {
		res.redirect("/admin/login");
	}
	console.log(req.user);
	res.render("admin-list.html");
});

/* GET Authorization Error page. */
router.get("/error", function(req, res, next) {
	// console.log(req.session);
	console.log(req.user);
	res.render("admin-error.html");
});

/* GET Authorization page. */
router.get("/authorization", function(req, res, next) {
	if (req.user === undefined) {
		res.redirect("/admin/login");
	}
	if (req.user !== "admin") {
		res.redirect("/admin/error");
	}
	res.render("admin-authorization.html");
});

/* GET Insert Upper Card page. */
router.get("/insert_upper_card", function(req, res, next) {
  if (req.user === undefined) {
		res.redirect("/admin/login");
	}
	if (req.user !== "admin") {
		res.redirect("/admin/error");
	}
	res.render("insert_upper_card.html");
});

/* GET Insert Upper Slide page. */
router.get("/insert_upper_slide", function(req, res, next) {
  if (req.user === undefined) {
		res.redirect("/admin/login");
	}
	if (req.user !== "admin") {
		res.redirect("/admin/error");
	}
	res.render("insert_upper_slide.html");
});

/* GET Insert Down Slide page. */
router.get("/insert_down_slide", function(req, res, next) {
  if (req.user === undefined) {
		res.redirect("/admin/login");
	}
	if (req.user !== "admin") {
		res.redirect("/admin/error");
	}
	res.render("insert_down_slide.html");
});

/* GET File Upload page. */
router.get("/upload", function(req, res, next) {
  if (req.user === undefined) {
		res.redirect("/admin/login");
	}
	if (req.user !== "admin") {
		res.redirect("/admin/error");
	}
	res.render("admin-upload.html");
});

module.exports = router;
