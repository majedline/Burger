const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {

    const undevouredList = data.filter(burger => (burger.devoured === 0));
    const devouredList = data.filter(burger => (burger.devoured === 1));

    const burgerList = {
      "undevouredList": undevouredList,
      "devouredList": devouredList
    };
    res.render("index", burgerList);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  burger.create(
    ["burger_name", "devoured"],
    [req.body.name, 0],
    (result) => {
      res.json({ id: result.insertId });
    });
});



module.exports = router;