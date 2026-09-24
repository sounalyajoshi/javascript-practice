let name="sonu";
let age=22;
const country="india";
console.log(name);
console.log(age);
console.log(country);
// datatypes

let x=10;
let nam="sonu";
let isStudent=true;
let y;
let call=null;
console.log(typeof(x));
console.log(typeof(nam));
console.log(typeof(isStudent));
console.log(typeof(y));
console.log(typeof(b));
console.log(call);
//Arthmetic 

let a=8;
 b=4;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


console.log(4=="4");
console.log(2==="2");
if(2=="2" && 4===4){
    console.log("true");
}
;


for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

// function

function demo(){
    return 1;
}
console.log(demo());

function greet(){
    return "hello";
}
console.log(greet());


function greet1(){
    console.log("hello");
}
greet1();
let car="car";
function start(vehicle){
   
console.log("starting"+vehicle);
}
start(car);

function multiply(a,b){
return a*b;
}
let result=multiply(5,4);
console.log(result);

function student(name,age){
return name+ " "+age;
}
 let check= student("jhon",22);
 console.log(check);
 function marks(marks){
    return  marks;
 }
 let test=marks(25);
console.log(test);
//arrow function
let introduvtion =(name) =>{
    console.log("hi "+name);
}
introduvtion("smith");

const add=(x,y)=>x+y;
console.log(add(2,3));
let sub =(a,b)=>{
return a-b;
}
let result1= sub(4,2);
console.log(result1);

const square =(a)=>{
    return a*a;
}
console.log(square(5));

const greety = (name)=>{
console.log("hello "+name);
}
greety("sounalya");

//array

let fruits=["apple","mango","banana"];
fruits[0]="kivi";
console.log(fruits);

console.log(fruits.length);
console.log(fruits[fruits.length-1]);

fruits.push("orange");
fruits.push("chikku");
fruits.pop();
console.log(fruits);


//arrray methods
// foreach()


let number=[1,2,3,4,5];
number.forEach((number)=>{
    console.log(number);
});
number.forEach(function(number){
    console.log(number);
});




let nums=[1,2,3,4,5];
number.forEach(function(num){
console.log(num*num);
});

// map()


let students=["smith","jhon","peter","don"];
students.map(function(student){
    return student;
});
let  varify= students;
console.log(varify);

let  numbers=[1,2,3,4,5,6];
 let result2=numbers.map(function(number){
    return number*2;
 })
 console.log(result2);

 let numbeers=[5,10,15,20];
 let output=numbeers.map(function(number){
    return number*3;
 });
 console.log(output);

 let sankya=[7,9,11,13];
 let getSnkya=sankya.map(function(sankhe){
    return sankhe+5;
 })
 console.log(getSnkya);
 let names=["jyoti","janu","sonu","sunil","sourabh"];
 let greets=names.map(function(name){
    return "hello "+name;
 });
 console.log(greets);


 let numberss=[1,10,15,20];
 let resultss=numberss.filter(function(number){
    return number>10;
 })
 console.log(resultss);
 
 // objects

 let stud={
    "name":"janu",
    "age":22,
    "height":4.5
 };
 console.log(stud.age);
 console.log(stud["age"]);

 let emplyoee={
    "name":"rahul",
    "age":28,
    "salary":30000
 };
 console.log(emplyoee.name);
 console.log(emplyoee.age);
 console.log(emplyoee.salary);
 
 let studentss={
    "name":"anu",
    "age":22
 };
 studentss.age=23;
 studentss.course="javascript";

 console.log(studentss);

 