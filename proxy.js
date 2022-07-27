class SchoolGirl{
    constructor(name) { 
      this.name=name 
    }
  
}
class IGiveGift { 
    GiveDolls(){}
    GiveFlowers(){}
}
class Pursuit extends  IGiveGift{
    constructor(name) { 
      super()
      this.name=name 
    }
    GiveDolls(){
       console.log(this.name,'送娃娃')
    }
    GiveFlowers(){
        console.log(this.name,'送花')
     }
}
class Proxy extends  IGiveGift{ 
    constructor(proxy) { 
      super()
      this.pursuit=new Pursuit(proxy.name) 
    }  
    GiveDolls () { 
        return this.pursuit.GiveDolls();
    }
    GiveFlowers () { 
        return this.pursuit.GiveFlowers();
    }
};


var jiao  = new SchoolGirl('小明') 
var proxy = new Proxy(jiao); 
proxy.GiveDolls();
proxy.GiveFlowers();  