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
  .aggregate([{$group: { _id: "$state", 'city': "$state"}}])
    .toArray(function(err, docArray) { 
      res.json({message : "saved", data : docArray}); 
  });
});


app.listen(port, () => console.log(`App listening on port ${port}!`))