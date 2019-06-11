const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const MongoClient = require('mongodb');
const router = express.Router();

function databaseLecture(req) {
  return req.DB.collection('lectures');
}

// A GET to the root of a resource returns a list of that resource
router.get('/', async function(req, res) {
  const doc = let result = await databaseLecture(req).find({}).toArray(function(err, docArray) { 
      res.json({message : "saved", data : docArray}); 
  });
});

// We specify a param in our path for the GET of a specific object
router.get('/:id', async function(req, res) {
  const id = MongoClient.ObjectID(req.params.id);
  const doc = let result = await databaseLecture(req).findOne({_id : id},function(err, data) { 
      res.json(data); 
  });
});

// A POST to the root of a resource should create a new object
router.post('/', async function(req, res) {
  let result = await databaseLecture(req).insertOne(req.body,function(err, data) { 
      res.json({message : "saved", data :data.ops} );
  });
});

// update a specific object
router.put('/', async function(req, res, next) {
  let result = await databaseLecture(req).updateOne(req.body, function(err, updated) {
    res.json({message : "saved", data : updated }).status(201);
  });
});

// Delete a specific object
router.delete('/', async function(req, res) {
  let course = req.body;
  let result = await databaseLecture(req).deleteOne(course,function(err, data) { 
      res.json({message : "saved", data : data});
  });
});

module.exports = router;