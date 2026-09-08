class students{
    constructor(){
        console.log("hi am constructor i am special method in class!");

    }


};
new students();



class Fruits{
    constructor(name){
    console.log("my fav fruit is:"  +name);
    }

}
new Fruits("mango");
//

class Fruit{
    constructor(name,color){
        this.name=name;           // this keyword pointing the current object.
        this.color=color;

    }
showDetails(){
    console.log(`${this.name} is ${this.color}`);
}

}
var  FruitsList=new Fruit("mango","yellow");
console.log(FruitsList.name);
FruitsList.showDetails();



class Shape{
    constructor(shape1,shape2){
     this.shape1=shape1;
     this.shape2=shape2;
    }


    display(){
        console.log(`${shape1} ${shape2} `);
    }

}



var checkshape = new Shape("circle", "square");
console.log(checkshape.shape1);
console.log(checkshape.shape2);


class Flowers{
    constructor(name,color){

        this.name=name;
        this.color=color;
        console.log(`${name} and ${color}`);

    }
getshow(){
console.log(`the name is :${this.name}\nand the color is: ${this.color}`);
}

}
var result=new Flowers("lotus","pink");
result.getshow();


class Family{
    constructor(){
        console.log("hi in my family 14 members are there");
    };
}
new Family();


class parent{
    constructor(parentName){
        console.log(`father name is ${parentName}`);

    }

}

class child extends parent{
    constructor(parentName,childName){
        super(parentName);

        console.log(`child name is ${childName}`);

    }
}
var family=new child("peter","smith");




class property{
    constructor(prop){
        console.log(`father gave his property like ${prop}`);

    }
}


class son extends property{
    constructor(prop){
        super(prop);
        console.log("son is very happy for gettis his ancestral property");

    }
}
var properties=new son("house");












