var express = require('express');
var router = express.Router();
var mongodbClient = require('mongodb').Mon;

function databaseLecture(req) {
    return req.DB.collection('restaurants');
  }
  
//1- 
router.get('/getAll', async function(req, res) {
    let result = await databaseLecture(req).find({}).toArray();
    res.json({message : "saved", data : result});;
});

//2- 
router.get('/getAllSpecificFields1', async function(req, res) {
    let result = await databaseLecture(req).find({},{ projection: {restaurant_id: 1,name: 1,district: 1,cuisine: 1}}).toArray();
    res.json({message : "saved", data : result});;
});

//3- 
router.get('/getAllSpecificFields2', async function(req, res) {
    let result = await databaseLecture(req).find({}).project({_id: 0,restaurant_id: 1,name: 1,district: 1,cuisine: 1}).toArray();
    res.json({message : "saved", data : result});;
});

//4-
router.get('/getAllSpecificFields3', async function(req, res) {
    let result = await databaseLecture(req).find({}).project({_id: 0,restaurant_id: 1,name: 1,district: 1,"address.zipcode": 1}).toArray();
    res.json({message : "saved", data : result});;
});

//5- 
router.get('/getAllSpecificFields4', async function(req, res) {
    let result = await databaseLecture(req).find({}).project({district:'Bronx'}).toArray();
    res.json({message : "saved", data : result});;
});

//6- 
router.get('/getAllSpecificFields5', async function(req, res) {
    let result = await databaseLecture(req).find({}).project({district:'Bronx'}).limit(5).toArray();
    res.json({message : "saved", data : result});;
});

//7- 
router.get('/getAllSpecificFields6', async function(req, res) {
    let result = await databaseLecture(req).find({}).project({district:'Bronx'}).skip(5).limit(5).toArray();
    res.json({message : "saved", data : result});;
});

//8- 
router.get('/getAllSpecificFields7', async function(req, res) {
    let result = await databaseLecture(req).find({'address.coord': { $elemMatch: { $lt: -95.754168 } } }).toArray();
    res.json({message : "saved", data : result});;
});

//9- Write a query to find the restaurants that does not prepare any cusine of 'American' 
//and their grade score more than 70 and coord value less than -65.754168
router.get('/getAllSpecificFields8', async function(req, res) {
    let result = await databaseLecture(req).find({
        cuisine: { $ne: 'American' },
        'grades.score': { $gt: 70 },
        'address.coord': { $lt: -65.754168 }
    }).toArray();
    res.json({message : "saved", data : result});;
});

//10- 
router.get('/getAllSpecificFields9', async function(req, res) {
    let result = await databaseLecture(req).find({ name: { $regex: '^Wil' } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray();
    res.json({message : "saved", data : result});;
});

//11- 
router.get('/getAllSpecificFields10', async function(req, res) {
    let result = await databaseLecture(req).find({ name: { $regex: 'ces$' } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray();
    res.json({message : "saved", data : result});;
});

//12- 
router.get('/getAllSpecificFields11', async function(req, res) {
    let result = await databaseLecture(req).find({ name: { $regex: 'Reg' } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray();
    res.json({message : "saved", data : result});;
});

//13- 
router.get('/getAllSpecificFields12', async function(req, res) {
    let result = await databaseLecture(req).find({ district: 'Bronx', cuisine: { $in: ['American', 'Chinese'] } })
    .toArray();
    res.json({message : "saved", data : result});;
});

//14- 
router.get('/getAllSpecificFields13', async function(req, res) {
    let result = await databaseLecture(req).find({ district: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray();
    res.json({message : "saved", data : result});;
});

module.exports = router;