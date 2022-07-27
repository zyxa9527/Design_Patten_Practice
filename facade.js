class SubSystemOne{
    MethOne(){
      console.log('子系統方法1')
    }
  }
  class SubSystemTwo{
    MethTwo(){
      console.log('子系統方法2')
    }
  }
  class SubSystemThree{
    MethThree(){
      console.log('子系統方法3')
    }
  }
  class SubSystemFour{
    MethFour(){
      console.log('子系統方法4')
    }
  }
  class Facade{
    constructor( ){
      this.one =  new SubSystemOne();
      this.two =  new SubSystemTwo(); 
      this.three = new SubSystemThree();
      this.four =  new SubSystemFour(); 
    }
    MethodA(){
      this.one.MethOne()
      this.three.MethThree()
    }
    MethodB(){
      this.two.MethTwo()
      this.one.MethOne()
      this.three.MethThree()
    }
    
  }
  
  var facade =  new Facade()
  facade.MethodA()
  facade.MethodB()