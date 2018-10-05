const assert = require('assert')
const insert = require('./insert')
const get = require('./get')
const update = require('./update')
const deleteData = require('./delete')
const dbconfig = require('./DBconfig')

const MongoClient = require('mongodb').MongoClient;

let oneDB = null

MongoClient.connect(dbconfig.url, { useNewUrlParser: true }, (err, client) => {
  assert.equal(null, err)
    oneDB = client.db(dbconfig.dbName)
})

const oper = (type, data) => new Promise((resolve, reject) => {
  switch (type) {
    case 'insert':
      insert.insert(oneDB, data)
      .then(res => {
        resolve(res)
        client.close()
      })
      .catch(error => {
        reject(error)
      })
    break
    case 'get':
      get.get(oneDB, data)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
    break
    case 'update':
      update.update(oneDB, data)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
    break
    case 'delete':
      deleteData.deleteData(oneDB, data)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
    break
    default:
      console.log('no type')
  }
})

module.exports = oper