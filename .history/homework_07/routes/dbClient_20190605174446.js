const url = "mongodb://localhost:27017/";
const MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = 'Hello world';

// module.exports = {

//   connectToServer: function( callback ) {
//       console.log('test ========= ');
//     MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
//         console.log('test ========= ' + client);
//       _db  = client.db('homework7');
//       console.log('_db ========= ' + _db);
//       return callback( err );
//     } );
//   },

//   getDb: function() {
//     return _db;
//   }
// };