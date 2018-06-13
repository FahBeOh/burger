var connection = require("./connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, col, val) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, col, val, col2, val2) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col, val, col2, val2], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        
    }
};

module.exports = orm;