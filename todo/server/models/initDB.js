const assert = require('assert')
const insert = require('./insert')
const get = require('./get')
const update = require('./update')
const deleteData = require('./delete')
const dbconfig = require('./DBconfig')

const MongoClient = require('mongodb').MongoClient;

const oper = (type, data) => new Promise((resolve, reject) => {
  MongoClient.connect(dbconfig.url, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err)
      let db = client.db(dbconfig.dbName)
      switch (type) {
        case 'insert':
          insert.insert(db, data)
          .then(res => {
            resolve(res)
            client.close()
          })
          .catch(error => {
            reject(error)
            client.close()
          })
        break
        case 'get':
          get.get(db, data)
          .then(res => {
            resolve(res)
            client.close()
          })
          .catch(error => {
            reject(error)
          })
        break
        case 'update':
          update.update(db, data)
          .then(res => {
            resolve(res)
            client.close()
          })
          .catch(error => {
            reject(error)
          })
        break
        case 'delete':
          deleteData.deleteData(db, data)
          .then(res => {
            resolve(res)
            client.close()
          })
          .catch(error => {
            reject(error)
          })
        break
        default:
          console.log('no type')
          client.close()
      }
  })
})

module.exports = oper