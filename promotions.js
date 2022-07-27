//促銷 簡單工廠

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
class CashFactory {
    createCashAccept(input) {
        var cs = null
        switch(input){
            case '正常收費':
            cs =  new CashNormal();
            break;
            case '滿300送100':
            cs =  new CashReturn('300','100');
            break;
            case '打8折':
            cs = new CashRebate('0.8');
            break;
        } 
      return cs
    } 
}
var f1 = new CashFactory().createCashAccept('滿300送100'); 
var total = f1.acceptCash(600)
console.log(total)
 
