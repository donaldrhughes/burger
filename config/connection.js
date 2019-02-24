//Dependencies
//==========================
var mysql = require("mysql");


//Main MySQL Database Connection
//================================
//define connection
var connection = mysql.createConnection({
  host: "ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xr4o0u0943hx2m3k",
  password: "gasjulemd4clnxqm",
  database: "jjaih35t23q0s22i"
});
//connect
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  //show the connection Thread if connected OK
  console.log("Burger-Time: " + connection.threadId);
});
//export connection
module.exports = connection;
