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
// 您可以将中间件和HTTP方法路由(例如get、put、post等等)添加到路由器，就像应用程序一样。
Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    if (!err) {
      return res.json(doc)
    }
  })
})
Router.post('/register', function(req, res) {
  // console.log(req.body)
  // 获取前端传递给我们的的数据
  const {user, pwd, type} = req.body//这种写法为es6的对象结构赋值
  // 根据user去数据模型里面查找，
  User.findOne({user}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户名重复'})
    }
    // 如果没有找到，就使用数据模型去添加一条数据
    User.create({user, pwd,type}, function(e, d) {
      if (e) {
        return res.json({code: 1, msg: '服务端出错'})
      }
      return res.json({code: 0})
    })
  })
})

module.exports = Router