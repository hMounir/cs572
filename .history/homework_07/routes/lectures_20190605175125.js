const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');


const router = express.Router();

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) {
  mongoUtil.connectToServer( function( err, client ) {
    if (err) console.log(err);

  } );

  console.log(mongoUtil);
  console.log(mongoUtil.getDb());
  var db = mongoUtil.getDb();

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