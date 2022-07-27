class Player{
    constructor(name){
      this.name = name
    }
    Attack(){}
    Defense(){}
  }
  class Forwards extends Player {
    Attack(){
      console.log(`前鋒${ this.name }進攻`)
    }
    Defense(){
      console.log(`前鋒${ this.name }防守`)
    }
  }
  class Center extends Player {
    Attack(){
      console.log(`中鋒${ this.name }進攻`)
    }
    Defense(){
      console.log(`中鋒${ this.name }防守`)
    }
  }
  class ForeignCenter  {
    constructor(name){
      this.name = name
    }
    Attackkkk(){
      console.log(`外籍中鋒${ this.name }進攻`)
    }
    Defenseeeee(){
      console.log(`外籍中鋒${ this.name }防守`)
    }
  }
  class Translator extends Player  {
    constructor(name){
      super()
      this.player=new ForeignCenter(name) 
    }
    Attack(){
      this.player.Attackkkk()
    }
    Defense(){
      this.player.Defenseeeee()
    }
  }
  
  
  var player  = new Forwards('麥克喬丹')
  var player2  = new Translator('姚明')
  player.Attack()
  player2.Defense()