/**
 * 单例模式
 */

class CreateUser {
  constructor(name, age) {
    console.log('constructor', +new Date())
    this.name = name
    this.age = age
  }
  getName() {
    return this.name + this.age
  }
}
// 代理实现单例模式
var ProxyMode = (function() {
  var instance = null
  return function(...arg) {
    if (!instance) {
      instance = new CreateUser(...arg)
    }
    return instance
  }
})()

module.exports = ProxyMode
