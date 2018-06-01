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