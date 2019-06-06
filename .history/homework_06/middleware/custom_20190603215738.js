const custom = function(req,res,next){
    console.log('asasasas');
    return next();
};

module.exports = custom;