const express = require('express')
const Router = express.Router()
// 引入数据模型库
const model = require('./model')
// 获取数据模型库中具体数据模型
const User = model.getModel('user')


Router.get('/info', function(req, res) {
  // 检验用户有没有cookie
  return res.json({code: 1})
})
Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    if (!err) {
      return res.json(doc)
    }
  })
})
Router.post('/register', function(req, res) {
  // console.log(req.body)
  const {user, pwd, type} = req.body.data
  User.findOne({user}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户名重复'})
    }
    User.create({user, pwd,type}, function(e, d) {
      if (e) {
        return res.json({code: 1, msg: '服务端出错'})
      }
      return res.json({code: 0})
    })
  })
})

module.exports = Router