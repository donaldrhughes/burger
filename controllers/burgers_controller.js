//Dependencies
//========================
var express = require("express");

var router = express.Router();
var burger = require("../models/burger");


//Main
//========================
router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgersData = {
            burgers: data
        };
        console.log(burgersData);
        res.render("index", burgersData);
    });
});

//create a burger, push to mysql, redirect to / to show new burger
router.post("/api/create", function (req, res) {
    
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burgerText, 0
        ], function (result) {
          res.redirect("/");
            
        });
});

//update the db to devoured true
  router.post("/api/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
   console.log(req.params.id);
    burger.update({
      devoured: 1
    }, condition, function(result) {
        res.redirect("/");
      console.log(result);
      })
    });

//export the routes / router
module.exports = router;