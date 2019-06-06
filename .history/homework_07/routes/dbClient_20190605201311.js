const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
let DB = null;
let _db;

async function connect(req, res, next) {
  try {
      if (DB) {
          req.DB = DB;
      } else {
          await client.connect();
          DB = client.db(DB_NAME);
          req.DB = DB;
      }
      next()
  } catch (error) {
      console.log(error)
  }
}

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

module.exports = { connectToDB, getDB,connection : connect}