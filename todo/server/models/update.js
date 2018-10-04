const dbconfig = require('./DBconfig')
const successMsg = {
  code: 1,
  msg: '更新成功'
}
const errorMsg = {
  code: 0,
  msg: '更新失败'
}
exports.update = (db, data) => new Promise((resolve, reject) => {
  let oldData = {
    content: data.oldContent
  }
  let newData = {
    title: data.newTitle,
    content: data.newContent
  }
  const collection = db.collection(dbconfig.collection)
  collection.updateOne(oldData, { $set: newData }, (err, result) => {
    result.result.n !== 1 ? reject(errorMsg) : resolve(successMsg)
  })
})
