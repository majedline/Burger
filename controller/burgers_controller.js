const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();


// load the buger page with the list of divoured and undevoured burgers
router.get("/", (req, res) => {
  try {
    burger.selectAll((data) => {

      const undevouredList = data.filter(burger => (burger.devoured === 0));
      const devouredList = data.filter(burger => (burger.devoured === 1));

      const burgerList = {
        "undevouredList": undevouredList,
        "devouredList": devouredList
      };
      res.render("index", burgerList);
    });
  } catch (err) {
    return res.status(500).end();
  }
});

// Add an undevoured burger
router.post("/api/burgers", (req, res) => {
  try {
    burger.create(
      ["burger_name", "devoured"],
      [req.body.name, 0],
      (result) => {
        res.json({ id: result.insertId });
      });
  } catch (err) {
    return res.status(500).end();
  }
});

//devour a burger
router.post("/api/eat-burger", (req, res) => {
  try {
    const condition = "id = " + req.body.id;

    burger.update(
      { "devoured": req.body.devoured }, condition,
      (result) => {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  } catch (err) {
    return res.status(500).end();
  }
});


module.exports = router;