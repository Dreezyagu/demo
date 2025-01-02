const getDB = require('../util/database').getDb;
const mongodb = require('mongodb');

class Product {
  constructor(title, imageUrl, description, price, id, userId) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this._id = id? new mongodb.ObjectId(id): null;
    this.userId = userId;
  }

  save() {
    const db = getDB();
    const dbOp = this._id ? db.collection('products').updateOne({ _id: this._id }, { $set: this }) : db.collection('products').insertOne(this);
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    console.log('fetchAll');
    const db = getDB();
    return db.collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

 static findById(prodId) {
    const db = getDB();
    return db.collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteById(prodId) {
    const db = getDB();
    return db.collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

 
module.exports = Product;
