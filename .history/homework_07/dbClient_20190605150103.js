const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

module.exports = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    return db.db("homework7").dbo;
});