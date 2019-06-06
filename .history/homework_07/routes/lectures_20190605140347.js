const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


const router = express.Router();

let data = [{ id: 1, name: 'Hisham Mohammed', course:'CS572', grade: 95}];

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) {
    dbConnection.collection("lectures").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        
      });
});
// A POST to the root of a resource should create a new object
router.post('/', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("homework7");
        var myobj = { course: {name:'MWA',id:'CS572'}, address: "FairField" };
        dbo.collection("lectures").insertOne(myobj, function(err, data) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
          res.json(data);
        });
      });
});
// We specify a param in our path for the GET of a specific object
router.get('/:id', function(req, res) { 
    from(data).pipe(
        filter(row => row.id == req.params.id),
        map(row=>row)
    ).subscribe(data=>res.json(data));
});

// Delete a specific object
router.delete('/:id', function(req, res) {
    console.log(req.params.id);
    from(data).pipe(
        filter(row => row.id != req.params.id)
    ).subscribe(list=>{
        data = [];
        data.push(list);
    });

    console.log(data);
    res.json(data);
});

module.exports = router;