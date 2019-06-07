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

//2- Display the fields restaurant_id,name,distict and cuisine for all restaurants.
router.get('/getAllSpecificFields1', async function(req, res) {
    await databaseLecture(req).find({},{ projection: {restaurant_id: 1,name: 1,district: 1,cuisine: 1}}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//3- Display the fields restaurant_id,name,distict and cuisine for all restaurants except _id.
router.get('/getAllSpecificFields2', async function(req, res) {
    await databaseLecture(req).find({},{ projection: {_id: 0,restaurant_id: 1,name: 1,district: 1,cuisine: 1}}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//4- Display the fields restaurant_id,name,distict and zipCode for all restaurants except _id.
router.get('/getAllSpecificFields3', async function(req, res) {
    await databaseLecture(req).find({},{ projection: {_id: 0,restaurant_id: 1,name: 1,district: 1,"address.zipcode": 1}}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//5- Write a query to display all restaurants which is in district Bronx 
router.get('/getAllSpecificFields4', async function(req, res) {
    await databaseLecture(req).find({district:'Bronx'}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//6- Write a query to display the first 5 restaurants which is in district Bronx 
router.get('/getAllSpecificFields5', async function(req, res) {
    await databaseLecture(req).find({district:'Bronx'}).limit(5).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//7- Write a query to display the next 5 restaurants after skipping first 5 which is in district Bronx 
router.get('/getAllSpecificFields6', async function(req, res) {
    await databaseLecture(req).find({district:'Bronx'}).skip(5).limit(5).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//8- Write a query to display the restaurants which locates in coord value less than -95.754168
router.get('/getAllSpecificFields7', async function(req, res) {
    await databaseLecture(req).find({ 'address.coord': { $elemMatch: { $lt: -95.754168 } } }).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//9- Write a query to find the restaurants that does not prepare any cusine of 'American' 
//and their grade score more than 70 and coord value less than -65.754168
router.get('/getAllSpecificFields8', async function(req, res) {
    await databaseLecture(req).find({
        cuisine: { $ne: 'American' },
        'grades.score': { $gt: 70 },
        'address.coord': { $lt: -65.754168 }
    }).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

module.exports = router;