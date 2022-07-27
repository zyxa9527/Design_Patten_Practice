class Manager{
    constructor(name){
      this.name =name;
      this.superior = null;
    }
    setSuperior(superior){ 
      this.superior = superior;
    }
    requestApplication(request){}
  }
  class CommomManager extends Manager{
    constructor(name,superior){
      super(name,superior);
    }
    requestApplication(request){  
      if(request.requestType ==='請假' && request.number<=2){
        console.log(`${this.name}:${request.requestContent} 數量 ${request.number} 被批准`);
      }else{   
        if(this.superior !== null){  
          this.superior.requestApplication(request);
        }
      }
    }
  }
  class Majordomo extends Manager{
    constructor(name,superior){
      super(name,superior);
    }
    requestApplication(request){
      if(request.requestType ==='請假' && request.number<= 5){
        console.log(`${this.name}:${request.requestContent} 數量 ${request.number} 被批准`);
      }else{ 
        if(this.superior !== null){ 
          this.requestApplication(request.superior) ;
        }
      }
    }
  }
  class GeneralManager extends Manager{
    constructor(name,superior){
      super(name,superior);
    }
    requestApplication(request){ 
      if(request.requestType ==='請假' && request.number<= 5){
        console.log(`${this.name}:${request.requestContent} 數量 ${request.number} 被批准`);
      }else if(request.requestType ==='加薪' && request.number <= 500){
         console.log(`${this.name}:${request.requestContent} 數量 ${request.number} 被批准`);
      }else if(request.requestType ==='加薪' && request.number > 500){
         console.log(`${this.name}:${request.requestContent} 數量 ${request.number} 再說吧`); 
      }else{
        console.log('none');
      }
    }
  }
  class Request{
    constructor(requestType,requestContent,number){
      this.requestType =requestType;
      this.requestContent =requestContent;
      this.number =number;
    }
  }
  
  let level1  = new CommomManager('level1');
  let level2  = new Majordomo('level2');
  let level3  = new GeneralManager('level3');
  level1.setSuperior(level2);
  level2.setSuperior(level3);
  
  let request = new Request('請假','員工請假',1);  
  level1.requestApplication(request);
  let request2 = new Request('請假','員工請假',4);  
  level1.requestApplication(request2);
  
  