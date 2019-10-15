const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        const unDevouredList = data.filter(burger => (burger.devoured === 0));
        const devouredList = data.filter(burger => (burger.devoured === 1));
        
        const burgerList = {
            "unDevouredList": unDevouredList,
            "devouredList": devouredList
        };
        console.log(burgerList);
        res.render("index", burgerList);
    });
});


module.exports = router;