const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;


const mongoConnect = (callback) => {
 MongoClient.connect('mongodb+srv://rojinatiwari17:K2fGiYs0pQ5bJAO0@cluster0.tbu4kef.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
.then(client => {
  console.log('connected!');
  _db = client.db();
  callback(client);
})
.catch( err => {
  console.log(err);
  throw err;
});
};


const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No database found!'
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;





