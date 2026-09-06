//here student is one array and inside its having the 3 objects

var students=[
{
    name:"rahul",
    age:22
},
{
    name:"priya",
    age:21
},
{
    name:"kiran",
    age:23
}
];

for(var i=0;i<students.length;i++){
console.log(students[i].name);
}
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

for(var i=0;i<students.length;i++)
{
    console.log(students[i].name);
    console.log(students[i].age);
    
}



let numbers=[10,20,30,40];

let result=numbers.filter(function(num){
    return num > 25;
});
console.log(numbers);
console.log(result);


//using filter() with array of object


var students=[
{
    name:"rahul",
    age:22
},
{
    name:"priya",
    age:21
},
{
    name:"kiran",
    age:23
}
];
var juniors=students.filter(function(student){
    return student.age<23;
});
console.log(juniors);



var findName=students.filter(function(studentName){
    return  studentName.name ==="rahul";
});
console.log(findName);
