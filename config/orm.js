var connection = require("../config/connections");


var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            // perhaps well use res.json(results)?
        });
    },
    insertOne: function (burger, eaten, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [burger, eaten], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (burger, eaten, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE burger_name = ?;";
        connection.query(queryString, [eaten, burger], function(err, res){
            if (err) throw err;
            cb(res);
        });

    }
};

module.exports = orm;