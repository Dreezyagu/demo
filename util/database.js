const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  mongoClient.connect('mongodb+srv://ifeanyi-driver:kTssAnhPr5MnJeG1@demo-cluster.d84qr.mongodb.net/shop?retryWrites=true&w=majority&appName=demo-cluster')
.then(client => {
  console.log("CONNECTED TO MONGODB");
  _db = client.db();
  callback();
})
.catch(err => {
    console.log(err);
});
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
