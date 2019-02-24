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

//I dont think you can do this --
// router.get("/:burger_name", function (req, res) {
//     burger.all(function (data) {
//         var burgersData = {
//             burgers: data
//         };
//         console.log(burgersData)
//         for (var i = 0; i < burgersData.length; i++) {
//             if (burgersData[i].burger_name == req.params.burger_name) {
//                 return res.render("index", burgersData[i]);
//             }
//         }
//     })
// });

//create a burger, push to mysql, redirect to / to show new burger
router.post("/api/create", function (req, res) {
    console.log(req.body.burgerText);
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burgerText, 0
        ], function (result) {
          res.redirect("/");
            
            //   res.json({ id: result.insertId });
        });
});
//use this to do the buttons
//   router.put("/api/burger/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.update({
//       devoured: req.body.devoured
//     }, condition, function(result) {
//       if (result.changedRows == 0) {

//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

module.exports = router;