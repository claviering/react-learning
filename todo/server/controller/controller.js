const oper = require('../models/initDB')

exports.insert = (req, res) => {
  oper('insert', req.body)
  .then(result => res.send(result))
  .catch(error => res.send(error))
  .catch(err => res.send(err))
}

let data = {}
exports.get = (req, res) => {
  oper('get', data)
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

exports.update = (req, res) => {
  oper('update', req.body)
  .then(result => res.send(result))
  .catch(error => res.send(error))
}

exports.delete = (req, res) => {
  oper('delete', req.body)
  .then(result => res.send(result))
  .catch(error => res.send(error))
  
}