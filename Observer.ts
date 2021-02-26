interface Observable{
    update : (data : any) => void;
    id : number,
}

interface Observer{
    notify: (data : any) => void;
    subscribe : (observer : Observable) => void;
    unSubscribe : (observer : Observable) => void;
}

class ObserverClass implements Observer{

    private observers : Observable[] = []; 

    notify(data : any){

        this.observers.forEach(x => {
            x.update(data);
        })

    }

    subscribe(observer : Observable){
        this.observers.push(observer)
    }

    unSubscribe(observer : Observable){
        this.observers = this.observers.filter(x => x != observer);
    }


}