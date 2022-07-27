class CashSuper { 
    constructor(money) {
      this.money = money; 
    }
    acceptCash() { 
        return this.money
    }
}
class CashNormal extends CashSuper { 
    constructor(money) {
      super(money) 
    }
    acceptCash(money) { 
        return money
    }
}
class CashRebate extends CashSuper  { 
    constructor(CashRebate) {  
      super() 
      this.CashRebate =CashRebate
    }
    acceptCash(money) {  
        return this.CashRebate  * money
    }
}
class CashReturn extends CashSuper { 
   constructor(moneyCondition,moneyReturn) {
      super() 
      this.moneyCondition=moneyCondition
      this.moneyReturn=moneyReturn
    }
    acceptCash(money) { 
        let result = money
        if(  money  >= this.moneyCondition ){
            result =   money  + Math.floor( money / this.moneyCondition ) * this.moneyReturn
        }
        return result
    }
}
class CashContext {
    constructor(type) { 
      this.type = type; 
    }
    createCashAccept(type) {
        var cs = null
        switch(type){
            case '正常收費':
            cs =  new CashNormal();
            break;
            case '滿300送100':
            cs =  new CashReturn('300','100');
            break;
            case '打8折':
            cs =  new CashRebate('0.8');
            break;
        } 
      return cs
    } 
    acceptCash(money) {  
        return this.createCashAccept(this.type).acceptCash(money)
    }
} 
var f1 = new CashContext('滿300送100') ; 
var total = f1.acceptCash(700)
console.log(total)
 
