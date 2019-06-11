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
    let result = await databaseLecture(req).find({district:'Bronx'}).toArray();
    res.json({message : "saved", data : result});;
});

//6- 
router.get('/getAllSpecificFields5', async function(req, res) {
    let result = await databaseLecture(req).find({district:'Bronx'}).limit(5).toArray();
    res.json({message : "saved", data : result});;
});

//7- 
router.get('/getAllSpecificFields6', async function(req, res) {
    let result = await databaseLecture(req).find({district:'Bronx'}).skip(5).limit(5).toArray();
    res.json({message : "saved", data : result});;
});

//8- 
router.get('/getAllSpecificFields7', async function(req, res) {
    let result = await databaseLecture(req).find({ 'address.coord': { $elemMatch: { $lt: -95.754168 } } }).toArray();
    res.json({message : "saved", data : result});;
});

//9-
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

//15- 
router.get('/getAllSpecificFields14', async function(req, res) {
    let result = await databaseLecture(req).find({ district: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray();
    res.json({message : "saved", data : result});;
});

//16- 
router.get('/getAllSpecificFields15', async function(req, res) {
    let result = await databaseLecture(req).find({ 'grades.score': { $ne: {$lt:10} } }).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
    .toArray();
    res.json({message : "saved", data : result});;
});

//17- 
router.get('/getAllSpecificFields16', async function(req, res) {
    let result = await databaseLecture(req).find({ 'address.coord.1': {$gt:42,$lte:52} }).project({ restaurant_id: 1, name: 1, address: 1, 'address.coord': 1 })
    .toArray();
    res.json({message : "saved", data : result});;
});

//18- 
router.get('/getAllSpecificFields17', async function(req, res) {
    let result = await databaseLecture(req).find({}).sort({'name':1})
    .toArray();
    res.json({message : "saved", data : result});;
});

//19- 
router.get('/getAllSpecificFields18', async function(req, res) {
    let result = await databaseLecture(req).find({}).sort({'name':-1})
    .toArray();
    res.json({message : "saved", data : result});;
});

//20- 
router.get('/getAllSpecificFields19', async function(req, res) {
    let result = await databaseLecture(req).find({}).sort([['cuisine',1],['district',-1]])
    .toArray();
    res.json({message : "saved", data : result});;
});

//21- 
router.get('/getAllSpecificFields20', async function(req, res) {
    let result = await databaseLecture(req).find({'coord':{$type:'double'}})
    .toArray();
    res.json({message : "saved", data : result});;
});

//22- 
router.get('/getAllSpecificFields21', async function(req, res) {
    let result = await databaseLecture(req).find({'name':{$regex:'^Med'}})
    .project({name:1,district:1,'address.coord.0':'longitude', 'address.coord.1':'latitude',cuisine:1})
    .toArray();
    res.json({message : "saved", data : result});;
});

module.exports = router;