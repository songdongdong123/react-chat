// 引入mongoose,并且链接数据库
const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/ethan'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})

// 定义数据模型字段
const models = {
  user: {
    'user': {'type': String, 'require': true},
    'pwd': {'type': String, 'require': true},
    'type': {'type': String, 'require': true},
    'avatar': {'type': String},
    // 个人简介或者职位简介
    'desc': {'type': String},
    // 职位名
    'title': {'type': String},
    'company': {'type': String},
    'money': {'type': String}
  },
  chat: {
    'chatid': {'type': String, require: true},
    'form': {'type': String, require: true},
    'to': {'type': String, require: true},
    'read': {'type': Boolean, default: false},
    'content': {'type': String, require: true, default: ''},
    'create_time': { type: Number, default: Date.now }
  }
}
// new Date().getTime()
for (let m in models) {
  // 遍历models，根据key，来批量生成不同的数据模型
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  // 根据参数name返回的对应的数据模型
  getModel: function (name) {
    return mongoose.model(name)
  }
}