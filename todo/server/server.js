const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controllers = require('./controller/controller.js')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/todo', controllers.find)
app.post('/todo', controllers.insert)

app.listen(3001, () => {
console.log('running in:')
  console.log('http://127.0.0.1:3001')
})