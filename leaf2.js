class Company {
    constructor(name){
      this.name = name;
      this.component = [];
    }
    add(){}
    remove(){}
    display(){}
    lineofDuty(){}
  }
  
  //人力部
  class HRDepartment extends Company {
    constructor(name){
      super(name);
    }
    add(){
      console.log('cannot add');
    }
    remove(){
      console.log('cannot remove');
    }
    display(depth){
      console.log(`${'-'.repeat(depth)}${this.name}`);
    }
    lineofDuty(){
      console.log(`${this.name}員工訓練`);
    }
  }
  //財務部
  class FinanceDepartment extends Company {
    constructor(name){
      super(name);
    }
    add(){
      console.log('cannot add');
    }
    remove(){
      console.log('cannot remove');
    }
    display(depth){
      console.log(`${'-'.repeat(depth)}${this.name}`);
    }
    lineofDuty(){
      console.log(`${this.name}財務管理`);
    }
  }
  class ComcrateCompany extends Company {
    constructor(name){
      super(name);
      this.children = new Company().component;
    }
    add(component){
      this.children.push(component);
    }
    remove(component){  
      this.children = this.children.filter(children=>children.name!==component.name );
    }
    display(depth){
      console.log(`${'-'.repeat(depth)}${this.name}`);
      this.children.forEach(children=>{ 
        children.display(depth+2);
      })
    }
    lineofDuty(){
      this.children.forEach(children=>{ 
        children.lineofDuty();
      })
    }
  }
  let a = 1
  for(let i = 0;i<5 ;i++){
a++
console.log(a)
  }

  let root = new ComcrateCompany('總公司');
  root.add( new FinanceDepartment('總公司財務部') );
  root.add( new HRDepartment('總公司人力部') );
  
  let comp = new ComcrateCompany('A分公司');
  comp.add( new FinanceDepartment('A分公司財務部') );
  comp.add( new HRDepartment('A分公司人力部') );
  root.add(comp);
  
  let comp1 = new ComcrateCompany('B');
  comp1.add( new FinanceDepartment('B財務部') );
  comp1.add( new HRDepartment('B人力部') );
  comp.add(comp1);
  let comp2 = new ComcrateCompany('C');
  comp2.add( new FinanceDepartment('C財務部') );
  comp2.add( new HRDepartment('C人力部') );
  comp.add(comp2);
  
  console.log('結構圖');
  root.display(1);
  console.log('職責');
  root.lineofDuty()