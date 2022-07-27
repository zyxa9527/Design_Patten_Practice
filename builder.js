class Product{
    constructor(parts=[]){ 
        this.parts = parts ;
    }
    add(part){ 
        this.parts.push(part);
    }
    show(){
        console.log('建立 car');
        this.parts.forEach(part=>{
          console.log('產出',part);
        })
    }
}
class Builder{ 
    builderPartA(){}
    builderPartB(){} 
    getResult(){}
}
class ConcrateBuilder1 extends Builder{
    constructor(){
        super() 
        this.product =  new Product();
    }
    builderPartA(){
        this.product.add('引擎');
    }
    builderPartB(){
        this.product.add('輪胎');
    }
    getResult(){ 
        return  this.product.parts;
    }
}
class ConcrateBuilder2 extends Builder{
    constructor(){
        super() ;
        this.product =  new Product();
    }
    builderPartA(){
        this.product.add('跑車引擎');
    }
    builderPartB(){
        this.product.add('跑車輪胎');
    }
    getResult(){
        return this.product.parts;
    }
}
class Director{ 
    construct(builder){
        builder.builderPartA();
        builder.builderPartB();
    }
}

let director = new Director();
let concrate1 = new ConcrateBuilder1();
let concrate2 = new ConcrateBuilder2();

director.construct(concrate1);
let Product1 = new Product(concrate1.getResult());
Product1.show();

director.construct(concrate2);
let Product2 = new Product(concrate2.getResult());
Product2.show();