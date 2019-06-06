const custom = function(req,res,next){
    try {
        JSON.parse(buf);
      } catch(e) {
        res.status(404).send('ko');
        throw Error('invalid JSON');
      }
    return next();
};

module.exports = custom;