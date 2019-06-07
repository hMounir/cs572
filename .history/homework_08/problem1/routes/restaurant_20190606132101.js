var express = require('express');
var router = express.Router();
var mongodbClient = require('mongodb').Mon;

function databaseLecture(req) {
    return req.DB.collection('lectures');
  }
  
// A GET to the root of a resource returns a list of that resource
router.get('/', async function(req, res) {
const doc = await databaseLecture(req).find({}).toArray(function(err, docArray) { 
    res.json({message : "saved", data : docArray}); 
});
});

module.exports = router;