{
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    get longName(){
      return 'mk'+this.name
    }

    set longName(value){
      this.name=value;
    }

    // 静态方法
    static tell(){
      console.log('tell');
    }
  }
  // 静态属性
  Parent.type='test';

  Parent.tell();
  console.log('静态属性',Parent.type);


  let v=new Parent();
  console.log('getter',v.longName);
  v.longName='hello';
  console.log('setter',v.longName);
}

{
  // 继承传递参数
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name);
      this.type='child';
    }
  }

  console.log('继承传递参数',new Child('hello'));
}


{
  class A {
    constructor(name){
      this.name = name;
    }
  }

  class B extends A{
    constructor(age){
      super()
      this.age = age
    }
    getInfo (){
      console.log('age',this.age );
      console.log('name', this.name);
      this.a = 'li lei';
      console.log('all',this.age +' '+ this.name);
    }
    set a(val){
      this.name = val;
    }
  }

  let s = new B('a');
  s.getInfo()
}


{
  class Rectangle {
      constructor(length, width) {
          console.log('new.target ->', new.target.name, ':', new.target === Rectangle);
          if (new.target === Rectangle) {
              throw new Error('本类不能实例化');
          }
      }
  }

  class Square extends Rectangle {
      constructor(length) {
          super(length, length);
      }
  }

  let obj = new Square(); // 输出 false
  try {
      let obj2 = new Rectangle(); // 不能实例化
  } catch (e) {
      console.log(e)
  }

}

{
  class ParentClass {
      constructor(name) {
          console.log("new.target.name", new.target.name)
          this.name = name;
      }

      static sayHello() {
          console.log("I'm parent!" + this.name);
      }

      static testFunc() {
          console.log('emm...Parent test static Func')
      }
  }

  class SubClass extends ParentClass {
      constructor(name) {
          console.log("new.target.name", new.target.name)
          super(name);
      }

      sayChildHello() {
          console.log("I'm child " + this.name)
      }

      static sayHello() {
          console.log("override parent method !,I'm sayHello Method")
      }

      static testFunc2() {
          console.log(super.testFunc() + 'fsdafasdf');
      }
  }

  // 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，
  // 而是直接通过类来调用，这就称为“静态方法”
  ParentClass.sayHello(); // success print
  let a = new ParentClass('test');
  //a.sayHello() // throw error

  SubClass.sayHello(); // 同名 static 可以继承且覆盖
  SubClass.testFunc2(); // 可以继承

  let testA = new SubClass('CRPER');
  //testA.sayHello();  //testA.sayHello is not a function

}
