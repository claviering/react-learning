const dbconfig = require('./DBconfig')
const successMsg = {
  code: 1,
  msg: '获取成功'
}
const errorMsg = {
  code: 0,
  msg: '获取失败'
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
