const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport"); // passport/index.js
// https://kosaf04pyh.tistory.com/23 참고해서 passport 구현

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var adminRouter = require("./routes/admin");

var app = express();

app.use(
	// 기본적인 세션설정
	session({
		resave: false,
		saveUninitialized: false,
		secret: "pyh",
		cookie: {
			httpOnly: true,
			secure: false,
		},
	})
);
app.use(express.urlencoded({ extended: false })); // 클라이언트의 form값을 req.body에 넣음
app.use(passport.initialize()); // passport 동작
app.use(passport.session());
passportConfig(passport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/admin", adminRouter);

app.post("/login", (req, res, next) => {
	passport.authenticate("local", (authError, user, info) => {
		// passport/localStrategy.js를 실행시킵니다.  (1)
		return req.login(user, loginError => {
			if (!loginError) {
				res.redirect("/admin/index");
			} else {
        console.log("login Error");
				res.redirect("/admin/");
			}
		});
	})(req, res, next);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error.html");
});

module.exports = app;
