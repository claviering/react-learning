const dbconfig = require('./DBconfig')
const successMsg = {
  code: 1,
  msg: '添加成功'
}
const errorMsg = {
  code: 0,
  msg: '添加失败'
}
// @param db 数据库
// @param data 插入的数据
exports.insert = (db, data) => new Promise((resolve, reject) => {
  if (data.content.length > 30 || data.title.length > 10) {
    reject(errorMsg)
    return
  }
  const collection = db.collection(dbconfig.collection)
  collection.insertOne(data, (err, result) => {
    result.result.n !== 1 ? reject(errorMsg) : resolve(successMsg)
  })
})
