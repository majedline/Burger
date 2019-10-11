const connection = require("./connection.js");


const orm = {
    selectAll: function () {
        const queryString = "SELECT id, burger_name, devoured FROM burgers;"

        // err is the error, result is the result set, acb is the anonymous call back function
        connection.query(queryString, (err, result, acb) => {
            if (err) {
                throw err;
            }
            acb(result);
        });
    },

    insertOne: function (obj) {
        return null;
    },

    updateOne: function (obj) {
        return null;
    }
};

module.exports = orm;