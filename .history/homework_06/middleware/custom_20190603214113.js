const custom = function(req,res){
    console.log('authenticated');
    res.end(200);
};

module.exports = custom;