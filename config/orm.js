const connection = require("./connection.js");





var orm = {
    selectAll: function (acb) {
        const queryString = "SELECT id, burger_name, devoured FROM burgers;"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            acb(result);
        });
    },
};

module.exports = orm;