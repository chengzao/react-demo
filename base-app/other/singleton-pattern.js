// 单例模式


{
  class Persion{
    constructor(){
      console.log('constructor')
    }
    static Instance(){
      if(!Persion.instance){
        Persion.instance = new Persion();
      }
      return Persion.instance;
    }
    getName(){
      console.log('getName')
    }
  }

  console.log('---------- 普通实例化 ---------')
  let p1 = new Persion();
  let p2 = new Persion();

  p1.getName();
  p2.getName();

  console.log('---------- 单例实例化 ---------')

  let p3 = Persion.Instance();
  let p4 = Persion.Instance();

  p3.getName()
  p4.getName()

}
