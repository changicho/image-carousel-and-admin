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

const localStrategy = require("passport-local").Strategy;

module.exports = passport => {
	passport.use(
		new localStrategy(
			{
				usernameField: "id",
				passwordField: "password",
			},
			(id, pw, done) => {
				const user = {
					id: id,
					password: pw,
				};

				connection.query(
					`select * from user where id="${id}"`,
					(err, rows, fields) => {
						let stringfy = JSON.stringify(rows);
            let json = JSON.parse(stringfy);
            
						if (rows.length === 0) {
							// console.log("not match");
							done(null, "사용자가 조회되지 않음");
						} else {
							user.password = json[0].password;

							if (pw === user.password) {
								console.log("localStrategy에서 id,pw 일치 확인");
								done(null, user);
							}
						}
					}
				);
			}
		)
	);
};
