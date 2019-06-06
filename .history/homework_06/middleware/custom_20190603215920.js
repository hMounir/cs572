const custom = function(req,res,next){
    console.log('authenticated');
    // res.end(200);
};

module.exports = custom;