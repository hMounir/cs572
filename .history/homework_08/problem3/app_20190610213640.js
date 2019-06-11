const express = require('express');
const ObjectId = require('mongodb').ObjectId;
// mongodb connection
const { connection } = require('./dbClient');

const app = express();
const port = 3000;

// mongodb connection
app.use(connection);
app.use(express.json());

function databaseCollection(req) {
  return req.DB.collection('');
}

app.get('/', async function(req, res) {   
  const doc = await databaseCollection(req).find({}).toArray(); 
  res.json(docArray); 
});

app.get('/:id', async function(req, res) {  
  const id = new ObjectId(req.params.id);
  const doc = await databaseCollection(req).findOne({_id : id}) 
  res.json({message : "success", data : doc}); 
});

app.post('/',  async function(req, res) {
    const result = await databaseCollection(req).insertOne(req.body);
    res.json({message : "success", data :result.ops} );
});

app.put('/', async function(req, res) {
    const result = await databaseCollection(req).updateOne(req.body);
    res.json({message : "saved", data : result }).status(201);
});

app.delete('/:id', async function(req, res, next) {
  await databaseCollection(req).remove({_id:new ObjectId(id)}, function(err, removed) {
    console.log(removed);
     res.json({message : "saved", data : removed});
  });
});

app.get('/nearest/:category', async function(req, res, next) {
  console.log('searching .....')
  let cat = req.params.category;
  let query = req.query;

  let critera = {category: cat, location: {$near : [ parseFloat(query.long), parseFloat(query.lat)] } };
  if (query.name) {
    critera.name = query.name;
  }

  await databaseCollection(req).find(critera ).limit(3).toArray(function(err, docArr){
        console.log('count: ', docArr.length );
        res.json(docArr);
  } );
});


app.listen(port, () => console.log(`App listening on port ${port}!`))