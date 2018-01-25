const express = require('express')

// 新建一个app
const app = express()

app.get('/', function(req, res){
  res.send('<h1>hello world<h1>')
})

app.get('/data', function (req, res) {
  res.json({name: 'eooothan,s', type: 'mans'})
})

app.listen(8080, function(){
  console.log('Node app start at port  8080')
})