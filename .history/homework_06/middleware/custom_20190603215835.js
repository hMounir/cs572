const custom = function(req,res,next){
    console.log('asdasdsa');
    return next();
};

module.exports = custom;