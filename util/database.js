const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
console.log(process.env.MONGODB_USERNAME)
console.log(process.env.MONGODB_PASSWORD)

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.6sujnmk.mongodb.net/?retryWrites=true&w=majority`
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
 