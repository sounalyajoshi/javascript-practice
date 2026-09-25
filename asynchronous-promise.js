let promise=new Promise(function(resolve,reject){
    let success=true;

    if(success){
        resolve("task completed");
    }else{
        reject("task failed");
    }
});
// to get promise result using .then() and .catch()
promise
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error)
});


const order=new Promise(function(resolve,reject){
    let foodReady=true;

if(foodReady){
    resolve("food is ready");
}else{
    reject("food is not ready");
}

});

order
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});

let login=new Promise(function(resolve,reject){
    let passwordCorrect=false;
    if(passwordCorrect){
        resolve("login successfully");
    }
    else{
        reject("failed to login")
    }
});


login
.then(function(right){
    console.log(right);
})
.catch(function(wrong){
    console.log(wrong);
})



let voting=new Promise(function(resolve,reject){
  let isEligible=false
    if(isEligible){
        resolve("eligible for voting");
    }else{
        reject("not eligible for voting")
    }
});
voting
.then(function(eligible){
    console.log(eligible);
})
.catch(function(noteligible){
    console.log(noteligible);
})