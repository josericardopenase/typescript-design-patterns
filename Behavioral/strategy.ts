interface IAttack{
    attack : () => void;
}

class WaterGun implements IAttack{

    public attack(){
        console.log("Water gun!!!")
    }

}

class Thunderbolt implements IAttack{

    public attack(){
        console.log("Thunderbolt!!!")
    }

}

enum PokemonTypes {water , electric }

class Pokemon{

    private name : string;
    private type : PokemonTypes;

    private movement : IAttack;

    constructor(name : string, type : PokemonTypes){

        this.name = name;
        this.type = type;

    }

    setMovement(movement : IAttack){

        this.movement = movement;

    }

    attack(){
        if(!this.movement){
            console.log("You cant do that");
            return;
        }

        this.movement.attack();
    }

}

const ThunderBoltInst = new Thunderbolt();
const WaterGunInst = new WaterGun();

const Pikachu : Pokemon = new Pokemon("Pikachu", PokemonTypes.electric);
const Squirtle : Pokemon = new Pokemon("Squirtel", PokemonTypes.water);

Pikachu.setMovement(ThunderBoltInst);
Squirtle.setMovement(WaterGunInst);

Pikachu.attack();
Squirtle.attack();





