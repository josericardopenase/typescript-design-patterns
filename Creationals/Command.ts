
interface ICommand{

    execute : () => void;
    unexecute : () => void;
}

class LightTurnOnCommand implements ICommand{

    private light : LightReceiver;

    constructor(light : LightReceiver){

        this.light = light;

    }

    execute(){
        this.light.on();
    }

    unexecute(){
        this.light.off();
    }

}

class WashDishesCommand implements ICommand{

    private wm : WashingMachineReceiver;

    constructor(wm : WashingMachineReceiver){

        this.wm = wm;

    }

    execute(){
        this.wm.startWashingDishes();
    }

    unexecute(){
        this.wm.stopWashingDishes();
    }

}

class Invoker{


    private commands : ICommand[] = [];

    public addCommand( command : ICommand){
        this.commands.push(command);
    }

    public removeCommand(command : ICommand){
        this.commands.filter((x) => x === command);
    }

    public runCommands(){
        this.commands.forEach((x) => x.execute());
    }

    public stopCommands(){
        this.commands.forEach((x) => x.unexecute());
    }

}


class WashingMachineReceiver{

    public startWashingDishes(){
        console.log("Starting washing dishes");
    }

    public stopWashingDishes(){
        console.log("Stop washing dishes");
    }
}

class LightReceiver{

    public on(){
        console.log("Turn on PC");
    }

    public off(){
        console.log("Turn off light");
    }
}

const iotRemote : Invoker = new Invoker();
iotRemote.addCommand(new LightTurnOnCommand(new LightReceiver()));
iotRemote.addCommand(new WashDishesCommand(new WashingMachineReceiver()));

iotRemote.runCommands();
iotRemote.stopCommands();