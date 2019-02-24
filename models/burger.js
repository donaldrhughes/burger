//Dependencies
//=====================

//requires use of the config/ORM
var orm = require("../config/orm");


//Main
//=====================
//establish a burger object to hold the db values once pulled in from burgers_db
var burger = {
    //Read All callback method that queries the burgers table asynchronysly
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    //Create callback method that queries the burgers table
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // Update callback method that queries the burgers table
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    //Delete callback method that queries the burgers table
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }

}

//export the burger object for use within the controller
module.exports = burger;
