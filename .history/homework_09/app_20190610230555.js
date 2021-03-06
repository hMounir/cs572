const express = require('express');
// mongodb connection
const { connection } = require('./dbClient');

const app = express();
const port = 3000;

// mongodb connection
app.use(connection);
app.use(express.json());

function databaseLecture(req) {
  return req.DB.collection('zips');
}

app.get('/', (req, res) => res.send('Hello App!'))

//1- 
app.get('/query1', async function(req, res) {
  let result = await databaseLecture(req)
  .aggregate([
    {$match :{state:'WA'}},
    {$group: { _id: {state:"$state",city:"$city"},population:{$sum:'$pop'}}}
  ]).toArray();
  res.json({message : "saved", data : result});
});

//2- 
app.get('/query2', async function(req, res) {
  let result = await databaseLecture(req)
  .aggregate([
    {$match :{pop:{$lt:5000}}},
  ])
    .toArray();
  res.json({message : "saved", data : result});
});

//3- 
app.get('/query3', async function(req, res) {
  let result = await databaseLecture(req)
  .aggregate([
    {
      $group: {
          _id: { state: '$state', city: '$city' },
          num_zip: { $sum: 1 }
      }
    },
    { $match: { num_zip: { $gt: 1 } } },
    { $project: { state: '$_id.state', city: '$_id.city' } },
    { $sort: { state: 1, city: 1 } }  
  ])
    .toArray(function(err, docArray) { 
      res.json({message : "saved", data : docArray}); 
  });
});

//4- 
app.get('/query4', async function(req, res) {
  let result = await databaseLecture(req)
  .aggregate([
    {
      $group: {
          _id: { state: '$state', city: '$city' },
          pop: { $sum: '$pop' }
      }
    },
    { $sort: { pop: -1 } },
    {
        $group:
        {
            _id: '$_id.state',
            city: { $first: '$_id.city' },
            pop: { $first: '$pop' },
        }
    }
  ])
    .toArray(function(err, docArray) { 
      res.json({message : "saved", data : docArray}); 
  });
});


app.listen(port, () => console.log(`App listening on port ${port}!`))