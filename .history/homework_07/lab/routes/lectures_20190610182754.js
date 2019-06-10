const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');
const MongoClient = require('mongodb');
const router = express.Router();

function databaseLecture(req) {
  return req.DB.collection('lectures');
}

router.get('/', async function(req, res) {
  const result = await databaseLecture(req).find().toArray();
  res.json(result);
});

router.get('/:id', async function(req, res) {
  const id = MongoClient.ObjectID(req.params.id);
  const result = await databaseLecture(req).findOne({_id : id});
  res.json(result);
});

router.post('/', async function(req, res) {
  const result = await databaseLecture(req).insertOne(req.body);
  res.json({message : "saved", data :result.ops} );
});

router.put('/', async function(req, res, next) {
  let query = { _id: req.body._id};
  let newvalues = { $set: {lecture: req.body.lecture, course: req.body.course } };
  const result = await databaseLecture(req).updateOne(query.newvalues);
  res.json({message : "saved", data : result}).status(201);
});

router.delete('/', async function(req, res) {
  let course = req.body;
  await databaseLecture(req).deleteOne(course,function(err, data) { 
      res.json({message : "saved", data : data});
  });

  const result = await databaseLecture(req).deleteOne(query.newvalues);
  res.json({message : "saved", data : result}).status(201);
});

router.get('/search/:q',async(req,res)=>{
  const result = await req.db.find({'lecture':{'$regex':req.params.q}}).toArray();
  res.json(result);
});

module.exports = router;