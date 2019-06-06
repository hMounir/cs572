const url = "mongodb://localhost:27017/";
const MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

  connectToServer: function( callback ) {
      console.log('test ========= ');
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('homework7');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};