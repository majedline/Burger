var burger = require("../models/burger.js");

var express = require("express");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


module.exports = router;