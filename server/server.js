const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})
// 新建一个数据模型
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
// 通过模型来操作数据库表
// 新增了一条数据
User.create({
  user: '小黑',
  age: 14
}, function(err, doc) {
  if (!err) {
    console.log(doc)
  } else {
    console.log(err)
  }
})
// // 根据过滤器的内容，删除对应的数据
// User.remove({age: 14}, function(err, doc) {
//   console.log(doc)
// })
// 新建一个app
const app = express()

app.get('/', function(req, res){
  res.send('<h1>hello world<h1>')
})

app.get('/data', function (req, res) {
  // 查找数据
  User.find({}, function(err, doc) {
    if (!err) {
      res.json(doc)
    }
  })
  // res.json({name: 'eooothan,s', type: 'mans'})
})

app.listen(9093, function(){
  console.log('Node app start at port  9093')
})