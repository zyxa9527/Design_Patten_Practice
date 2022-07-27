class ClassBase {
    func(){
        console.log(this.constructor.name);
    }
}
let base = new ClassBase();

class ClassA extends ClassBase{

}
let a = new ClassA();
class ClassB extends ClassBase{
    
}
//let b = new ClassB();

let A = {
    dosomething : function (val /* ClassBase */ ){
        val.func();
    }
}
A.dosomething(a);