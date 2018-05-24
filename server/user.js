const express = require('express')
// 引入工具库函数进行加密
const utils = require('utility')
const Router = express.Router()
// 引入数据模型库
const model = require('./model')
// 获取数据模型库中具体数据模型
const User = model.getModel('user')
// 获取数据模型中Char模型
const Chat = model.getModel('chat') 

// 过滤条件
const _filter = {'pwd':0,'__v':0}

Router.get('/info', function(req, res) {
  // 检验用户有没有cookie
  const {userid} = req.cookies // 这里客户端可以直接拿到cookie，只要有的时候
  if (!userid) {
    return res.json({code: 1})
  }
  // 拿到cookie之后，去我们的数据库查询
  User.findOne({_id: userid}, _filter, function (err, doc) {
    if (err) {
      return res.json({code:1, msg: '查询出错'})
    }
    if (doc) {
      return res.json({code: 0, data: doc})
    }
  })
})
// 您可以将中间件和HTTP方法路由(例如get、put、post等等)添加到路由器，就像应用程序一样。
Router.get('/list', function(req, res) {
  // User.remove({},function(){})
  User.find({}, function(err, doc) {
    if (!err) {
      return res.json(doc)
    }
  })
})


Router.get('/getmsglist', function (req, res) {
  const user = req.cookies.user
  // {'$or': [{from: user, to: user}]}
  Chat.find({}, function (err, doc) {
    if (!err) {
      return res.json({code: 0, msgs: doc})
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
    // 这里我们使用另一种方式在数据模型中插入一条数据（因为使用create的话，只有数据生成了我们才能拿到id，所以我们在注册的时候无法保存用户id）
    // User.create({user, pwd:pwdMd5(pwd), type}, function(e, d) {
    //   if (e) {
    //     return res.json({code: 1, msg: '服务端出错'})
    //   }
    //   return res.json({code: 0})
    // })

    // 所以我们使用另外一种方式生成一条数据
    // 这种方式我们异步生成数据的时候，当生成成功的时候，回调函数会返回，新增成功的数据返回给我们
    const userModel = new User({user, pwd:pwdMd5(pwd), type})
    userModel.save(function(err, doc){
      if (err) {
        return res.json({code:0, msg: '服务端出错'})
      }
      if (doc) {
        const {user, type, _id} = doc
        res.cookie('userid',_id)
        res.json({code: 0, data:{user, type, _id}})
      }
    })
  })
})

Router.post('/login', function(req, res) {
  const {user, pwd} = req.body
  // findOne的第三个参数是过滤条件，过滤掉返回的字段
  // 字段值为0，则过滤掉
  // User.findOne({user, pwd:pwdMd5(pwd)},{'pwd':0} , function(err, doc){
  User.findOne({user, pwd:pwdMd5(pwd)}, _filter, function(err, doc){
    if (doc) {
      res.cookie('userid', doc._id)
      return res.json({code:0, data:doc})
    } else {
      return res.json({code:1, msg: '用户名或者密码错误'})
    }
  })
})

Router.post('/update',function(req,res){
	const userid = req.cookies.userid
	if (!userid) {
		return json.dumps({code:1})
	}
  const body = req.body
	User.findByIdAndUpdate(userid,body,function(err,doc){
    const data = Object.assign({},{
      user:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data})
	})
})

Router.get('/userlist', function(req, res) {
  const {type} = req.query
  User.find({type}, function(err, doc) {
    if (!err) {
      return res.json({code:0, data:doc})
    } else {
      return res.json({code: 1})
    }
  })
})

// 我们自己对原始的MD5进行复杂度调整
function pwdMd5(pwd) {
  const salt = 'Ethan_is_man_56good#@!45$sss$453%^&9**~~~~``'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router