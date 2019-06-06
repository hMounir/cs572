const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const MongoDB = require('./dbClient');

const router = express.Router();

async function getAll(){
  const db = await MongoDB.connectDB();
  console.log(db);
}

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) {
 // Connect to MongoDB and put server instantiation code inside
 // because we start the connection first
  MongoDB.connectDB(async (err) => {
    if (err) throw err
    // Load db & collections
    const db = MongoDB.getDB()
    const users = db.collection('lectures')

    
  })
  

  // MongoDB.connectDB(async (err) => {
  //     if (err) throw err
  //     // Load db & collections
  //     const db = MongoDB.getDB();
  //     console.log(db);
  //     try {
  //         const collection = db.collection('lectures');
  //         const result = await collection.find({}).toArray();
  //         res.json(result);
  //     } catch (e) {
  //         throw e
  //     }
  // });
});

// A POST to the root of a resource should create a new object
router.post('/', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("homework7");
        dbo.collection("lectures").insertOne(req.body, function(err, data) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
          res.json(data.ops);
        });
      });
});
// We specify a param in our path for the GET of a specific object
router.get('/findOne', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("homework7");
        dbo.collection("lectures").findOne({}, function(err, result) {
          if (err) throw err;
          db.close();
          res.json(result);
        });
      });
});

// Delete a specific object
router.delete('/', function(req, res) {
    let course = req.body;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("homework7");
        dbo.collection("lectures").deleteOne(course, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
          res.json(obj);
        });
      });
});

module.exports = router;