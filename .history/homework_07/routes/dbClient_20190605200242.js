const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb://localhost:27017/'
let _db

const connectToDB = async (callback) => {
    try {
        MongoClient.connect(uri, (err, db) => {
            _db = db.db("homework7");
            return callback(err)
        })
    } catch (e) {
        throw e
    }
}

const getDatabase = function(){
  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    _db = db.db("homework7");
  });
  return _db;
}

const getDB = () => _db
const disconnectDB = () => _db.close()

module.exports = { connectToDB, getDB, disconnectDB }