

function welcome(){
    console.log("welcome to javascript");

}
welcome();


function showName(){
    var name="jaanu";
    console.log(name);
}
showName();


function addNum(){
    var a=10;
    var b=20;
var result=a+b;
    console.log(result);
}
addNum();



    // arrays practicing



var list=["apple",22,"smith","banana"];
console.log(list);
console.log(list[2]);
console.log(list.length);

var familyMembers=["appa","amma",["son","daughters" ],"ajja","ajji"];

console.log(familyMembers[1]);
console.log(familyMembers[2][0]);
console.log(familyMembers[2][1]);
console.log(familyMembers);


var studentsList=["jhon","smith", "ravi","ramya", "sanju"];

// using push method we can the add the another student to studentlist group.
 
studentsList.push("raki");
console.log(studentsList);


studentsList.pop();
console.log(studentsList);

studentsList.shift();
console.log(studentsList);

studentsList.unshift("jhon");
console.log(studentsList);









