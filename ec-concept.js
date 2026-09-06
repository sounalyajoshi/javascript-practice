function student(){
    return"jhon";
}
var student1=student();
console.log(student1);


//anonymous fuction
var customer=function(name ,address){
    return name+" "+address;
}

console.log(customer("jhon" ,"xyz"));



var name1=function(name){
                          return name;
                         }
console.log(name1("smith"));


var number=function(){
console.log(22);
}
();

var customrer_name=function(customerName){
                                          return customerName
                                        }
console.log(customrer_name("andy"));



//passing parameter to arrow function

var customerDetail= (customerName)=>{

                                        return customerName;

                                    }
console.log(customerDetail("peter"));

var personDetails= (personName,personPlace)=>{
    return personName+" from "+personPlace;
}
  
console.log(personDetails("willson","USA"));