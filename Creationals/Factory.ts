
interface Animal{
    noise : () => void;
}


interface Factory{
    create : (args : any) => Object;
}



class Cat implements Animal{

    noise() : void{
        console.log("Mewwww")
    }

}

class Dog implements Animal{

    noise() : void{
        console.log("Wofff")
    }
}

class Duck implements Animal{

    noise() : void{
        console.log("Pio Pio")
    }

}

class AnimalRandomFactory implements Factory{

    create() : Animal{

        const random = Math.random()

        if(random < 0.3){
            return new Dog();
        }else if(random < 0.6 && random > 0.3){
            return new Cat();
        }else{
            return new Duck();
        }
    }
}

const AnimalCreator = new AnimalRandomFactory();

AnimalCreator.create().noise();
AnimalCreator.create().noise();
AnimalCreator.create().noise();
AnimalCreator.create().noise();
AnimalCreator.create().noise();
AnimalCreator.create().noise();

