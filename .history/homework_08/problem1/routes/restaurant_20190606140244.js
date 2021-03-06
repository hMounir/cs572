var express = require('express');
var router = express.Router();
var mongodbClient = require('mongodb').Mon;

function databaseLecture(req) {
    return req.DB.collection('restaurants');
  }
  
//1- Display all documents in the collection restaurant
router.get('/getAll', async function(req, res) {
    let result = await databaseLecture(req).find({}).limit(100).toArray();
    res.json({message : "saved", data : result});;
});

//2- Display the fields restaurant_id,name,distict and cuisine for all restaurants.
router.get('/getSpecificFieldsExceptId1', async function(req, res) {
    let result = await databaseLecture(req).find({},{restaurant_id: 1,name: 1,district: 1,cuisine: 1}).limit(5).toArray();
    res.json({message : "saved", data : result});;
});

//2- Display the fields restaurant_id,name,distict and zipCode for all restaurants except _id.
router.get('/getAllSpecificFieldsExceptId3', async function(req, res) {
    let result = await databaseLecture(req).find({},{ _id: 0,restaurant_id: 1,name: 1,district: 1,"address.zipcode": 1}).limit(5).toArray();
    res.json({message : "saved", data : result});;
});

module.exports = router;