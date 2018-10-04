const dbconfig = require('./DBconfig')
const successMsg = {
  code: 1,
  msg: '添加成功'
}
const errorMsg = {
  code: 0,
  msg: '添加失败'
}
exports.get = (db, data = {}) => new Promise((resolve, reject) => {
  const collection = db.collection(dbconfig.collection)
  collection.find(data).toArray((err, docs) => {
    if (err !== null) {
      reject(errorMsg)
    }
    let res = docs.map(item => ({
      title: item.title,
      content: item.content
    }))
    successMsg.data = res
    resolve(successMsg)
  })
})
