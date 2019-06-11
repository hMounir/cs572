const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const router = express.Router();

function databaseLecture(req) {
  return req.DB.collection('lectures');
}

// A GET to the root of a resource returns a list of that resource
router.get('/', async function(req, res) {
    const doc = let result = await databaseLecture(req).find({}).toArray(function(err, docArray) { 
      res.json(docArray); 
    });
});

// A POST to the root of a resource should create a new object
router.post('/', function(req, res) {
    const doc = let result = await databaseLecture(req).insertOne(req.body,function(err, data) { 
      res.json(data.ops); 
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