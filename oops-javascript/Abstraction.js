class CoffeeMachine{

    makeCoffee(){
       this.boilWater();
        console.log("coffee is ready");
}
boilWater(){
console.log("boiling water");
}
}
const machine= new CoffeeMachine();
machine.makeCoffee();