//南丁格爾工廠模式

class IFactory {
    Undergraduate(){
        return new Undergraduate()
    }
    Volunterr() {
        return new Volunterr()
    }
}

class Undergraduate { 
    Sweep() {
        console.log('Undergraduate掃地')
    }
    Wash() {
        console.log('Undergraduate洗衣')
    }
}
class Volunterr { 
    Sweep() {
        console.log('Volunterr掃地')
    }
    Wash() {
        console.log('Volunterr洗衣')
    }
}
const Factory = new IFactory();
let student = Factory.Undergraduate()
let student2= Factory.Volunterr()
student.Sweep()
student2.Sweep()



let objList = {};

function init(){
    objList["Undergraduate"] =  Factory.Undergraduate();
    objList["Volunterr"] =  Factory.Volunterr();
}

init();
objList["Volunterr"].Sweep();