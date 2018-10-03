const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())

const todo = [
  {id: 1, title: '吃饭', content: '要去吃好多好吃的'},
  {id: 2, title: '睡觉', content: '我要睡一天'},
  {id: 3, title: '去玩', content: '去玩一天'},
  {id: 4, title: '学习', content: '学习一天'}
]

app.get('/todo', (req, res) => {
  res.send(todo)
})

app.post('/todo', (req, res) => {
  let date = '添加成功'
  let newdata = req.body
  newdata.id = todo[todo.length - 1].id + 1
  todo.push(newdata)
  console.log(todo);
  res.send(date)
})
app.listen(3001, () => {
console.log('running in:')
  console.log('http://127.0.0.1:3001')
})