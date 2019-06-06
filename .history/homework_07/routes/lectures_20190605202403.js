const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const router = express.Router();

function databaseLecture(req) {
  return req.DB.collection('lectures');
}

// A GET to the root of a resource returns a list of that resource
router.get('/', async function(req, res) {
  const doc = await databaseLecture(req).find({}).toArray(function(err, docArray) { 
      res.json(docArray); 
  });
});

// A POST to the root of a resource should create a new object
router.post('/', async function(req, res) {
  const doc = await databaseLecture(req).insertOne(req.body,function(err, data) { 
      res.json(data.ops); 
  });
});
// We specify a param in our path for the GET of a specific object
router.get('/findOne', async function(req, res) {
  const doc = await databaseLecture(req).findOne({},function(err, data) { 
      res.json(data); 
  });
});

// Delete a specific object
router.delete('/', await function(req, res) {
  let course = req.body;  
  const doc = await databaseLecture(req).deleteOne(course,function(err, data) { 
      res.json(data); 
  });
});

module.exports = router;