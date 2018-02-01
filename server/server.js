const express = require('express')
const bodyParser = require('body-parser')
const cookirParse = require('cookie-parser')
const userRouter = require('./user')
const app = express()
// 这里我们定义了路有的前缀，也就是所有跟user相关的都走user相关下的接口
app.use(cookirParse)
app.use(bodyParser.json())
// app.use('/user', userRouter)


// 新建一个app
app.listen(9093, function(){
  console.log('Node app start at port  9093')
})