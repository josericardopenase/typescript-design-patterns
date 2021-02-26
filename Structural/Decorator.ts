
//Decorator using monkey patching

export class Decorable{

    private value = 2;

    getPrice(){
        //some functionality
        return this.value;
    }


}

export function DecorateFunctionality(decorable : Decorable, discount : number){

    let priceParent = decorable.getPrice();

    decorable.getPrice = function() {

        return priceParent - discount;


    }
    

}

//How it works

const decorable = new Decorable();
DecorateFunctionality(decorable, 1);

console.log(decorable)

