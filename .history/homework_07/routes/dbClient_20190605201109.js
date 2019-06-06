const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
let _db

const connectToDB = async (callback) => {
    try {
        MongoClient.connect(url,{ useNewUrlParser: true }, (err, db) => {
            _db = db.db("homework7");
            return callback(err)
        })
    } catch (e) {
        throw e
    }
}

const getDB = () => _db

module.exports = { connectToDB, getDB}