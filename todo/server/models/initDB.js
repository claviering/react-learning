const assert = require('assert')
const insert = require('./insert')
const find = require('./find')

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'todo';

const oper = (type, data) => new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err)
      let db = client.db(dbName)
      switch (type) {
        case 'insert':
          insert(db, data)
          .then(res => {
            resolve(res)
            client.close()
          })
          .catch(error => {
            reject(error)
            client.close()
          })
        break
        case 'findAll':
          find.findAll(db, data)
          .then(res => {
            resolve(res)
            client.close()
          })
          .catch(error => {
            reject(error)
          })
        break
        case 'findMaxId':
          find.findMaxId(db)
          .then(res => {
            resolve(res)
            client.close()
          })
          .catch(error => {
            reject(error)
            client.close()
          })
        break
        default:
          console.log('no type')
          client.close()
      }
  })
})

module.exports = oper