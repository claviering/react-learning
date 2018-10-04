const oper = require('../models/initDB')

exports.insert = (req, res) => {
  oper('findMaxId', {})
  .then(maxId => {
    let data = req.body
    data.id = maxId + 1
    oper('insert', data)
    .then(result => res.send(result))
    .catch(error => res.send(error))
  })
  .catch(err => res.send(err))
}

let data = {}
exports.find = (req, res) => {
  oper('findAll', data)
  .then(result => res.send(result))
  .catch(err => res.send(err))
}