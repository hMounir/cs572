const express = require('express');
// mongodb connection
const { connection } = require('./dbClient');

const app = express();
const port = 3000;

// mongodb connection
app.use(connection);

function databaseLecture(req) {
  return req.DB.collection('restaurants');
}

app.get('/getAll', async function(req, res) {
  let result = await databaseLecture(req).find({}).toArray(function(err, docArray) { 
      res.json({message : "saved", data : docArray}); 
  });
});

app.get('/', (req, res) => res.send('Hello App!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))