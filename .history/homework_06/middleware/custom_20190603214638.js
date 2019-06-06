const custom = function(req,res,next){
    console.log('authenticated');
    next();
};

module.exports = custom;