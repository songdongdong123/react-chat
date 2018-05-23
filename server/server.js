// Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
const express = require('express')
// body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。
const bodyParser = require('body-parser')
const app = express()

// socket.io work with express
const server = require('http').Server(app)

const io = require('socket.io')(server)

io.on('connection', function(socket) {
  // console.log('user login')
  socket.on('sendmsg', function (data) {
    io.emit('recvemsg', data)
  })
})

// cookie-parser是一个非常好用方便的插件,作用就是设置和读取浏览器cookie的插件
const cookirParse = require('cookie-parser')
// 这里我们定义了路有的前缀，也就是所有跟user相关的都走user相关下的接口
const userRouter = require('./user')
const testRouter = require('./test')
app.use(cookirParse())
app.use(bodyParser.json())
// 直白的说use就是给你的当前路径的请求加上中间件，
// 假如这个路径的参数没有传，默认的就是"/"，也就是说所有的请求都会走这个中间件处理。
app.use('/user', userRouter)
// app.use('/test', testRouter)



// 新建一个app
server.listen(9093, function(){
  console.log('Node app start at port  9093')
})