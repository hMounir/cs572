var express = require('express');
var router = express.Router();
var mongodbClient = require('mongodb').Mon;

function databaseLecture(req) {
    return req.DB.collection('restaurants');
  }
  
//1- 
router.get('/getAll', async function(req, res) {
    await databaseLecture(req).find({}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//2- 
router.get('/getAllSpecificFields1', async function(req, res) {
    await databaseLecture(req).find({},{ projection: {restaurant_id: 1,name: 1,district: 1,cuisine: 1}}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//3- 
router.get('/getAllSpecificFields2', async function(req, res) {
    await databaseLecture(req).find({}).project({_id: 0,restaurant_id: 1,name: 1,district: 1,cuisine: 1}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//4- 
router.get('/getAllSpecificFields3', async function(req, res) {
    await databaseLecture(req).find({}).project({_id: 0,restaurant_id: 1,name: 1,district: 1,"address.zipcode": 1}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//5- 
router.get('/getAllSpecificFields4', async function(req, res) {
    await databaseLecture(req).find({district:'Bronx'}).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//6- 
router.get('/getAllSpecificFields5', async function(req, res) {
    await databaseLecture(req).find({district:'Bronx'}).limit(5).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//7- 
router.get('/getAllSpecificFields6', async function(req, res) {
    await databaseLecture(req).find({district:'Bronx'}).skip(5).limit(5).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//8- 
router.get('/getAllSpecificFields7', async function(req, res) {
    await databaseLecture(req).find({ 'address.coord': { $elemMatch: { $lt: -95.754168 } } }).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//9-
router.get('/getAllSpecificFields8', async function(req, res) {
    await databaseLecture(req).find({
        cuisine: { $ne: 'American' },
        'grades.score': { $gt: 70 },
        'address.coord': { $lt: -65.754168 }
    }).toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//10- 
router.get('/getAllSpecificFields9', async function(req, res) {
    await databaseLecture(req).find({ name: { $regex: '^Wil' } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//11- 
router.get('/getAllSpecificFields10', async function(req, res) {
    await databaseLecture(req).find({ name: { $regex: 'ces$' } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//12- 
router.get('/getAllSpecificFields11', async function(req, res) {
    await databaseLecture(req).find({ name: { $regex: 'Reg' } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//13- 
router.get('/getAllSpecificFields12', async function(req, res) {
    await databaseLecture(req).find({ district: 'Bronx', cuisine: { $in: ['American', 'Chinese'] } })
    .toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//14- 
router.get('/getAllSpecificFields13', async function(req, res) {
    await databaseLecture(req).find({ district: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//15- 
router.get('/getAllSpecificFields14', async function(req, res) {
    await databaseLecture(req).find({ district: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

//16- 
router.get('/getAllSpecificFields15', async function(req, res) {
    await databaseLecture(req).find({ district: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray(function(err, docArray) { 
        res.json({message : "saved", data : docArray}); 
    });
});

module.exports = router;