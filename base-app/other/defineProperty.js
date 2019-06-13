var obj = {}
// Object.defineProperty(obj, 'num', {
//   value: 1,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// })
//  对象 obj 拥有属性 num，值为 1

// console.log(obj.num)

var obj = {}
value = null
Object.defineProperty(obj, 'num', {
  get: function() {
    console.log('执行了 get 操作')
    return value
  },
  set: function(newValue) {
    console.log('执行了 set 操作')
    value = newValue
  },
  enumerable: true,
  configurable: true,
})

obj.num = 1 // 执行了 set 操作

console.log(obj.num) // 执行了 get 操作 // 1
