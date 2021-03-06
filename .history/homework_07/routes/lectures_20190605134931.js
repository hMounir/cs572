const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const {dbConnection} = require('../mongodb');


const router = express.Router();

let data = [{ id: 1, name: 'Hisham Mohammed', course:'CS572', grade: 95}];

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) {
    dbConnection.collection("lectures").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
});
// A POST to the root of a resource should create a new object
router.post('/', function(req, res) {
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbConnection.collection("lectures").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json(res);
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