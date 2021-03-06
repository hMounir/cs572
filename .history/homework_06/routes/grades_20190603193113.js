const express = require('express');
const {from} = require('rxjs');
const {filter,map} = require('rxjs/operators');


const router = express.Router();

const data = [{ id: 1, name: 'Hisham Mohammed', course:'CS572', grade: 95}];

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) { 
    res.json(data);
});
// A POST to the root of a resource should create a new object
router.post('/', function(req, res) {
    data.push(req.body);
    res.json(req.body);
});
// We specify a param in our path for the GET of a specific object
router.get('/:id', function(req, res) { 
    from(data).pipe(
        filter(row => row.id == req.params.id),
        map(row=>row)
    ).subscribe(data=>res.json(data));
});

// Delete a specific object
router.delete('/:id', function(req, res) {
    const index1  = data.findIndex((element) => {
        return element.id === req.params.id;
      });
      if (index1 >= 0 ) {
        data.splice(index1,1);
      }
      return data;
});

module.exports = router;