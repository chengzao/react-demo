// 方法继承

/*  -----------------------  es5  ----------------------------- */

function Persion(name,age){
  this.name = name;
  this.age = age;
};

// 原型上的属性方法
Persion.prototype.userInfo = function(){
  console.log(this.name + ' ' + this.age);
}
// 原型上的属性
Persion.prototype.sex = 'boy';

// 静态方法
Persion.otherName = 'zhang xiao ming';

var persion = new Persion('zhang san',18);

//
persion.userInfo();
console.log(Persion.otherName)

// 继承

function Web(name, age){
  // 对象冒充继承: 无法继承原型链上的属性方法
  Persion.call(this, name, age);
}

// 原型继承: 传参问题
Web.prototype = new Persion();

var p1 = new Web('wang xiao er', 14);

p1.run();

p1.userInfo()

// 修改原型链
var obj= {'name':'zhangsan'};

function Foo (age,gender) {
	this.age = age;
	this.gender = gender;
}

Foo.prototype = obj;

//Foo.prototype.__proto__ =obj;

var foo = new Foo();

console.log(foo.name);

