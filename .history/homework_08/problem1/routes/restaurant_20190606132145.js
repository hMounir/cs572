var express = require('express');
var router = express.Router();
var mongodbClient = require('mongodb').Mon;

function databaseLecture(req) {
    return req.DB.collection('restaurants');
  }
  
// A GET to the root of a resource returns a list of that resource
router.get('/', async function(req, res) {
    let result = await databaseLecture(req).find({}).toArray();
    res.json({message : "saved", data : result});;
});

module.exports = router;