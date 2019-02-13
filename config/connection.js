//Dependencies
//==========================
var mysql = require("mysql");


//Main MySQL Database Connection
//================================
//define connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});
//connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  //show the connection Thread if connected OK
  console.log("id: " + connection.threadId);
});
//export connection
module.exports = connection;
