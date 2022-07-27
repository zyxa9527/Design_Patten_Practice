class State{
    writeProgram(){}
}
class ForenoonState extends State{
    writeProgram(work){
        if(work.hour<12){
            console.log(`當前時間${ work.hour }點 早上`);
        }else{ 
            work.setState( new NoonState() );
            work.writeProgram();
        }
    }
}
class NoonState extends State{
    writeProgram(work){
        if(work.hour<13){
            console.log(`當前時間${ work.hour }點 中午`);
        }else{
            work.setState( new AfternoonState() );
            work.writeProgram();
        }
    }
}
class AfternoonState extends State{
    writeProgram(work){
        if(work.hour<17){
            console.log(`當前時間${ work.hour }點 下午`);
        }else{
            work.setState( new EveningState() );
            work.writeProgram();
        }
    }
}
class EveningState extends State{
    writeProgram(work){
        if(work.taskFinished){
            work.setState( new RestState() );
            work.writeProgram();
        }else{
            if(work.hour<21){
            console.log(`當前時間${ work.hour }點 加班`) ;
            }else{
            work.setState( new SleepingState() );
            work.writeProgram();
            }
        }
    }
}
class SleepingState extends State{
    writeProgram(work){
        console.log(`當前時間${ work.hour }點 睡著`);
    }
}
class RestState extends State{
    writeProgram(work){
        console.log(`當前時間${ work.hour }點 下班`);
    }
}
class Work extends State{
    constructor(){
        super();
        this.current  = new ForenoonState();
        this.hour =  0;
        this.taskFinished = true;
    }
    writeProgram(){
        this.current.writeProgram(this);
    }
    setState(state){
        this.current =state;
    }
}

let project = new Work();
project.hour = 9;
project.writeProgram();
project.hour = 12;
project.writeProgram();
project.hour = 14;
project.writeProgram();

project.taskFinished = false ;
project.hour = 19;
project.writeProgram();
project.hour = 22;
project.writeProgram();