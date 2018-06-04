// 数组对象分组
var testArr = [
  {name: 'a', age: 1, id: 'asd'},
  {name: 'a', age: 2, id: 'asd'},
  {name: 'a', age: 2, id: 'laji'},
  {name: 'a', age: 1, id: 'asd'},
  {name: 'a', age: 3, id: 'asd'},
  {name: 'a', age: 1, id: 'hhd'},
  {name: 'a', age: 4, id: 'asd'},
  {name: 'a', age: 4, id: 'mmp'}
]
var group = {}
testArr.forEach(v => {
  group[v.age] = group[v.age] || []
  group[v.age].push(v)
  // return 
  console.log(v)
})
console.log(group)

// 更改数组对象属性，或者扩展对象属性
// 1.基础用法
var list = [
  {name: 'a', age: 1, id: 'asd'},
  {name: 'a', age: 2, id: 'asd'},
  {name: 'a', age: 2, id: 'laji'},
  {name: 'a', age: 1, id: 'asd'},
  {name: 'a', age: 3, id: 'asd'},
  {name: 'a', age: 1, id: 'hhd'},
  {name: 'a', age: 4, id: 'asd'},
  {name: 'a', age: 4, id: 'mmp'}
]
var templist1 = list.map(v => ({...v, time: '2018-06-04'}))
console.log(templist1)

// 2.灵活一点的用法
var templist2 = list.map(v => (({...v,sex:v.age===1?'1':'2'})))
console.log(templist2)