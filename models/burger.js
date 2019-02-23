//Dependencies
//=====================
var orm = require("../config/orm");

var burger = {
    //Read All method
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    //Create method
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // Update method
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    //Delete method
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }

}


module.exports = burger;
/*create the code that calls ORM functions using
burger specific input for the ORM. Export at end.*/