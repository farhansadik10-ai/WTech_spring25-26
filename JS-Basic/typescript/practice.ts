class car{
    name:string;
    model:string;
    colour:string;
    Milage:number;
    constructor(name:string,model:string,Milage:number,colour:string){
        this.name=name;
        this.model=model;
        this.colour=colour;
        this.Milage=Milage;

    }
    display():void{
        console.log('Name:${this.name},Model:${this.model}');
    }
}
const car1=new car("Harrier","Toyota",9,"black");