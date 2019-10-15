// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (acb) {
    orm.all("burgers", function (res) {
      acb(res);
    });
  },
  create: function (cols, vals, acb) {
    orm.create("burgers", cols, vals, function (res) {
      acb(res);
    });
  },
  update: function (objColVals, condition, acb) {
    orm.update("burgers", objColVals, condition, function (res) {
      acb(res);
    });
  },
  delete: function (condition, acb) {
    orm.delete("burgers", condition, function (res) {
      acb(res);
    });
  }

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
