var studentDetails_1={
    "name":"jhon",
    "age" : 22,
    "address":"xyz",
    "id":2,
    "class":"5th class" ,
    "subject":"english"
};
delete studentDetails_1.address;
console.log(studentDetails_1);
console.log("studentDetails_1" ,studentDetails_1["name"]);   //based on key we get values.
console.log("studentDetails_1" ,studentDetails_1["age"]);
console.log("studentDetails_1" ,studentDetails_1["address"]);
console.log("studentDetails_1" ,studentDetails_1["subject"]);

//modify the value in object

studentDetails_1.name = "smith";
console.log(studentDetails_1);

studentDetails_1.class="8th class";
console.log(studentDetails_1);


var introduction={
                    "name" :"smith",
                    "age"  :21

};
console.log(introduction);


var Smith={
    "age":22,
    "class":"5th class"
};

Smith["intrest"]=["singing","dancing","playing"];

console.log(Smith);

//delete the one record from Smith

delete Smith.age;
console.log(Smith);

function details(key){
    var person={
        "name":"jhon",
        "age":22,
        "job":"SE"
    };

var  personInfo =person[key];
return personInfo;
}
var personInfo =details("job");
console.log(personInfo);





function children(key){
    var details={
    "childName":"smith",
    "childAge":8,
   };

   var childInformation= details[key];
   return childInformation;
}

var childInformation =children("childName");
console.log(childInformation);



var FifthClassStudent=[
    { 
    "name":"smith",
    "age":22,
    "id":1,
    "marks":90,
    "Topper_Count":  {"name":"smith",
                       "marks":90

                     },
    "city":"null"

    },
    {
   
    "name":"jhon",
    "age":21,
    "id":2,
    "marks":89,
    "Topper_Count":  {"name":"smith",
                       "marks":89

                     },
    "city":"null"
 
    }
]
console.log(FifthClassStudent[0]);
console.log(FifthClassStudent[0]["Topper_Count"]);



