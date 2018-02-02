// 引入express
const express = require('express') 
// 使用Router中间件
const Router = express.Router()

Router.get('/info', function(req, res) {
  res.json({code: 0})
})

module.exports = Router