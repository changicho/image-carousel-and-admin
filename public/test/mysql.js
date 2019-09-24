var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'amazon_api',
  password : 'pass1234',
  port     : 3306,
  database : 'amazon'
});


connection.connect();

connection.query('SELECT * from user', function(err, rows, fields) {
  if (!err){
    stringfy = JSON.stringify(rows);
    json = JSON.parse(stringfy);
    console.log(json);
  }
  else
    console.log('Error while performing Query.', err);
});

connection.end();