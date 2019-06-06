const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const MongoDB = require('./dbClient');

const router = express.Router();

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) {

  MongoDB.connectDB(async (err) => {
      if (err) throw err
      // Load db & collections
      const db = MongoDB.getDB()
      const users = db.collection('lectures')

      try {
          // Run some sample operations
          // and pass users collection into models
          const newUser = await Users.createUser(users, seedUser)
          const listUsers = await Users.getUsers(users)
          const findUser = await Users.findUserById(users, newUser._id)

          console.log('CREATE USER')
          console.log(newUser)
          console.log('GET ALL USERS')
          console.log(listUsers)
          console.log('FIND USER')
          console.log(findUser)
      } catch (e) {
          throw e
      }

      const desired = true
      if (desired) {
          // Use disconnectDB for clean driver disconnect
          MongoDB.disconnectDB()
          process.exit(0)
      }
      // Server code anywhere above here inside connectDB()
  });

  dbClient.connectToServer( function( err, client ) {
    if (err) console.log(err);
    console.log(client);
  } );

  console.log(dbClient);
  console.log(dbClient.getDb());
  var db = dbClient.getDb();

  db.collection("lectures").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
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