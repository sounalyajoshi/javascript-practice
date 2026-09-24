//filter()
 
const ages=[12,18,25,15,30,10];
let getAges=ages.filter(function(age){
    return age>=18;
});
console.log(getAges);

const numbers=[10,15,20,25,30,35];

// filter() using in normal function
let getNum=numbers.filter(function(num){
    return num>20;
})
console.log(getNum);

// filter() using in arrow function
const getNums=numbers.filter((num)=>{
   return num>20;
})
console.log(getNums);

const number=[2,3,7,6,9];
let result=number.filter((num)=>{
    return num%2===0;
});
console.log(result);


//distructing concept
// it takes the values from array and stores in variables.

//array distructing
let vegitables=["carrot","spinach","radish","tomato"]

let [first,second,third]=vegitables;
console.log(first);
console.log(second);
console.log(third);


const emplyoee={
    name:"rahul",
    age:22,
    role:"developer",
    city:"bangalore"
};
const{name,role}=emplyoee;
console.log(name);
console.log(role);

//spread operator= whish is expands the values

const nums=[1,2,45,30];
const newNums=[...nums,40,50];
console.log(newNums);

// rest oerator=it collects the remaining values


function addNumbers(...number){
    console.log(number);

}
addNumbers(10,20,30,40);

function showNames(...names){
    console.log(names);
}
showNames("jhon","smith");











