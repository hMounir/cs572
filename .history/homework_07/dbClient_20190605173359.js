const url = "mongodb://localhost:27017/";

module.exports = require('mongodb').MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log(db);
    return db.db("homework7");
});