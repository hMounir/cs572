module.exports = require('mongodb').MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
    if (err) throw err;
    return db.db("homework7").dbo;
});