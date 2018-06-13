var express = require("express");
var router = express.Router();
var orm = require("../models/burger.js");

router.get("/", function(req, res) {
    orm.all(function(data){
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("index", burgers);
    });
});

// router.put("/update", function(req, res) {
//     orm.
// })
module.exports = router;