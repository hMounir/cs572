const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'homework7';

// Create a new MongoClient
const client = new MongoClient(url);
const db;

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);

  db.createCollection("lectures", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
  client.close();
});

function getDB(){
    return db;
}

module.exports = getDB;