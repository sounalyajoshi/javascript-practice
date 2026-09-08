export let fruitName="mango";

export function name(){

    return name;
};



export class mobileGoods{
    productType  = "mobile";
    location     ="USA";
    getproductDetails(){
        return ["iphone",100000]
    }
}

export class garmentGoods{
    garmentType  ="louis phillppe";
    location      ="australia";
    getproductDetails(){
        return ["shirts",5000]
    }
}


export class Student{
    constructor(name,age){
  this.name=name;
  this.age=age;
    }

    displayStudent(){
        return`student name is:${this.name} and  his age is: ${this.age}`;
        }
}



export class  College{
    constructor(collegeName){
        this.collegeName=collegeName;
    }

 displayCollege(){
    console.log(`college name is:${this.collegeName}`);
 }

}