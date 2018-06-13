var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    create: function(val){
        orm.insertOne("burgers", "burger_name", val, function(res) {
            console.log(res);
        });
    },
    update: function(val2){
        orm.updateOne("burgers", "devoured", 1, "burger_name", val2, function(val2) {
            console.log(val2);
        });
    }
}

module.exports = burger;