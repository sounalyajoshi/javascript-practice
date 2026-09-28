async function greet(){
    return "hello";
}
console.log(greet());

async function getUser(){
    let promise=new Promise((resolve)=>{  /// here creating promise
        resolve("user data received");
    });
    let result=await promise;    // await is waiting for promise result
    console.log(result);
}
getUser();

let passwordCorrect=true;
async function checkLogin(){
    let promise=new Promise((resolve,reject)=>{
        
        if(passwordCorrect===true){
            resolve("login successfully");
        }else{
            reject("invalid password");
        }

    });

     try{
        let result=await promise;
        console.log(result);

    } catch(error){
        console.log(error);
    }
}
 checkLogin();

 async function checkAge(){
let age = 20;
let promise=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("eligible to vote");
    }else{
        reject("not eligible to vote");

    }
});
//try catch to handle the rejection and i always use with await
try{
    let result=await promise;
    console.log(result);
}
catch(error){
console.log(error);
}
 }
checkAge();
