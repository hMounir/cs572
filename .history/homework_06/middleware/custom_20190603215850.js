const custom = function(req,res,next){
    console.log('authenticated');
    return next();
};

module.exports = custom;