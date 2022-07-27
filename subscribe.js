class Subject{
    constructor(){ 
      this.observers = new Observer().Observer;
    }
    attach(observer){  
      this.observers.push(observer);
    }
    detach(observer){ 
      this.observers =this.observers.filter(obser=>obser===observer );
    }
    notify(){
      this.observers.forEach(observer=>{
        observer.update();
      })
    } 
}

class ConcrateSubject extends Subject{
    constructor(subjectState){ 
        super();
        this.subjectState =  subjectState;
    }
}

class Observer{ 
    constructor(){ 
        this.Observer = [];
    }
    update(){} 
}

class ConcrateObserver extends Observer{
    constructor(subject,name){ 
        super();
        this.subject =  subject ;
        this.name =  name;
    }
    update(){
        console.log(`${this.subject.subjectState}後已經送到${this.name}家`);
    } 
}

let main = new ConcrateSubject();
main.attach( new ConcrateObserver(main,'小明') );
main.attach( new ConcrateObserver(main,'小李') );
main.attach( new ConcrateObserver(main,'小天') );

main.subjectState = '發送報紙';
main.notify();