var mysqlDB = require("./DB.js");
var sql = null;
module.exports = {
    getMemes: function (callback) {
        sql = "select * from meme_info";
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    updateMemes: function (data, callback) {
        mysqlDB.updateTable(data, callback)
    },
    deleteMemes: function (data, callback) {
        mysqlDB.deleteTable(data, callback);
    },
    addMemes: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    }
};