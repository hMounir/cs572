var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) { });
// A POST to the root of a resource should create a new object
router.post('/', function(req, res) { });
// We specify a param in our path for the GET of a specific object
router.get('/:id', function(req, res) { });
// Similar to the GET on an object, to update it we can PATCH
router.patch('/:id', function(req, res) { });
// Delete a specific object
router.delete('/:id', function(req, res) { });

module.exports = router;