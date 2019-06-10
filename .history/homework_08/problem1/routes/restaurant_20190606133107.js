var express = require('express');
var router = express.Router();
var mongodbClient = require('mongodb').Mon;

function databaseLecture(req) {
    return req.DB.collection('restaurants');
  }
  
//1- Display all documents in the collection restaurant
router.get('/getAll', async function(req, res) {
    await databaseLecture(req).find({}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//2- Display the fields restaurant_id,name,distict and cuisine for all restaurants except _id.
router.get('/getAllExceptId', async function(req, res) {
    let query = {restaurant_id:'$restaurant_id',name:'$name',distict:'$distict',cuisine:'$cuisine'};
    await databaseLecture(req).find({query}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

module.exports = router;