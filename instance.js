let Singleton = (function () {
    let instance 
    return function () { 
        if (!instance) {  
            this.name = '小明';
            return instance = this;
        }  
        return instance;
    }
})();

//Singleton.prototype.inEverything = true;

let s3 = new Singleton();
let s4 = new Singleton();

console.log(s3,s4);
console.log(s3 === s4); 