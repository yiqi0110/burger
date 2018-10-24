var orm = require("../config/orm");

var burg = {
    all: function(cb){
        orm.selectAll(burger, eaten, cb);
    },
    insert: function(cb){
        orm.insertOne(burger, eaten, cb);
    },
    update: function(cb) {
        orm.updateOne(burger, eaten, cb);
    }
};

module.exports = burg;
