export default class Singleton{

    private static instance : Singleton;


    static getInstance(){
        
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance 
    }


}