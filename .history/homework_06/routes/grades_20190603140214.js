var express = require('express');
var router = express.Router();

// A GET to the root of a resource returns a list of that resource
router.get('/', function(req, res) { 
    res.json([{ id: 1, name: 'Hisham Mohammed', course:'CS572', grade: 95}]);
});
// A POST to the root of a resource should create a new object
router.post('/', function(req, res) { 
    res.json(req.body);
});
// We specify a param in our path for the GET of a specific object
router.get('/:id', function(req, res) { 

});
// Similar to the GET on an object, to update it we can PATCH
router.patch('/:id', function(req, res) { 

});
// Delete a specific object
router.delete('/:id', function(req, res) { 
    
});

module.exports = router;