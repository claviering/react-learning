const col = 'todo'

// @param db 数据库
// @param data 插入的数据
const insert = (db, data) => new Promise((resolve, reject) => {
  const collection = db.collection(col)
  collection.insertOne(data, function(err, result) {
    if (err !== null) {
      reject(err)
    }
    resolve(result)
  })
})

module.exports = insert