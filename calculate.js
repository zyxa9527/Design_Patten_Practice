//計算機 簡單工廠

class Operation{
  constructor(NumberA, NumberB) {
      this.NumberA = NumberA;
      this.NumberB = NumberB;
  }
  GetResult() {
      const result = 0
      return result
  };
}
class OperationAdd extends Operation{
    constructor(NumberA, NumberB){
      super(NumberA, NumberB)
    }
    GetResult() { 
        var result = this.NumberA + this.NumberB
        return result
    };
}
class OperationSub extends Operation{
    constructor(NumberA, NumberB){
      super(NumberA, NumberB)
    }
    GetResult() { 
        var result = this.NumberA - this.NumberB
        return result
    };
}
class OperationMul extends Operation{
    constructor(NumberA, NumberB){
      super(NumberA, NumberB)
    }
    GetResult() { 
        var result = this.NumberA * this.NumberB
        return result
    };
}
class OperationDiv extends Operation{
    constructor(NumberA, NumberB){
      super(NumberA, NumberB)
    }
    GetResult() { 
      if(this.NumberB==0){
        console.log('分母不能為0')
        return
      }
        var result = this.NumberA / this.NumberB
        return result
    };
}
class OperationFactory {
  createOperate(operate){
    var oper = null
    switch(operate){
          case'+':
            oper =  new OperationAdd()
            break;
          case'-':
            oper =  new OperationSub()
            break;
          case'*':
            oper =  new OperationMul()
            break;
          case'/':
            oper =  new OperationDiv() 
            break;
      }
    return oper
  }
}

let oper = new OperationFactory().createOperate('/'); 
oper.NumberA = 1
oper.NumberB = 10
var result = oper.GetResult()  
console.log(result)
  
  
   

function A (val) {
  for(var i = 0;i<10;i++){
    //do something
  }
  console.log(i);
}
A(10);