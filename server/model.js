const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/ethan-chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})

const models = {
  user: {
    'user': {'type': String, 'require': true},
    'pwd': {'type': String, 'require': true},
    'type': {'type': String, 'require': true},
    'avater': {'type': String},
    // 个人简介或者职位简介
    'desc': {'type': String},
    // 职位名
    'title': {'type': String},
    // 如果是boos，还有两个字段
    'conpany': {'type': String},
    'money': {'type': String}
  },
  chat: {

  }
}

for (let m in models) {
  // 遍历models，根据key，来批量生成不同的模型
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  // 根据参数name返回的对应的数据模型
  getModel: function (name) {
    return mongoose.model(name)
  }
}