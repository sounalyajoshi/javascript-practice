function calculate(a,b,callback){
let result=a+b;
callback(result);
}
function display(result){
    console.log(result);
}
calculate(10,20,display);

function calculate(x,y,callback){
    let result=x-y;
    callback(result);
}

function display(result){
    console.log(result);
}
calculate(40,20,display);

function greet(name){
    console.log("hello " +name);
}
function user(callback){
    callback("janu");
}
user(greet);

function hi(){
    console.log("hi everyone");
}
function hello(callback){
    console.log("start");
    callback();
    console.log("stop");

}
hello(hi);

function welcome(){
    console.log("welcome all");
}
function runTask(callback){
    console.log("task started");
    callback();
    console.log("task stoped");
}
runTask(welcome);

