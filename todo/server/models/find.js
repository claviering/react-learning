const assert = require('assert')
const col = 'todo'
exports.findAll = (db, data = {}) => new Promise((resolve, reject) => {
  const collection = db.collection(col)
  collection.find(data).toArray((err, docs) => {
    if (err !== null) {
      reject(err)
    }
    let res = docs.map(item => ({
      id: item.id,
      title: item.title,
      content: item.content
    }))
    resolve(res)
  })
})

exports.findMaxId = db => new Promise((resolve, reject) => {
  const collection = db.collection(col)
  collection.find({}).sort({'id': -1}).limit(1).toArray((err, docs) => {
    if (err !== null) {
      reject(err)
    }
    if (docs.length === 0) {
      resolve(0)
    }
    let res = docs.map(item => ({
      id: item.id,
    }))
    resolve(res[0].id)
  })
})

