// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var bruger = {
  all: function (acb) {
    orm.all("bruger", function (res) {
      acb(res);
    });
  },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
