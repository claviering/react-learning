const dbconfig = require('./DBconfig')
const successMsg = {
  code: 1,
  msg: '删除成功'
}
const errorMsg = {
  code: 0,
  msg: '删除失败'
}
exports.deleteData = (db, data) => new Promise((resolve, reject) => {
  console.log(data)
  if (data.content === undefined) {
    reject(errorMsg)
    return
  }
  const collection = db.collection(dbconfig.collection)
  collection.deleteOne(data, (err, result) => {
    result.result.n !== 1 ? reject(errorMsg) : resolve(successMsg)
  })
})