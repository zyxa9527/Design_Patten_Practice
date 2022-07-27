class Component {
  constructor(name){
    this.name = name;
    this.component = [];
  }
  add(){}
  remove(){}
  display(){}
}
class Leaf extends Component {
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
}
class Composite extends Component {
  constructor(name){
    super(name);
    this.children = new Component().component;
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
}

let root = new Composite('root');
root.add( new Leaf('Leaf A') );
root.add( new Leaf('Leaf B') );

let comp = new Composite('Composite X');
comp.add( new Leaf('Leaf XA') );
comp.add( new Leaf('Leaf XB') );
root.add(comp);

let comp2 = new Composite('Composite XY');
comp2.add( new Leaf('Leaf XYA') );
comp2.add( new Leaf('Leaf XYB') );
comp.add(comp2);

root.add( new Leaf('Leaf C') );
let leaf = new Leaf('Leaf D');
root.add(leaf); 
root.remove(leaf);

root.display(1);