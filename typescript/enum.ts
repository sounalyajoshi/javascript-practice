
//  here we directly not run the typescript so we first convert into javascript then connect in index .
// html you get output in live server.


enum humanbody{
    eye=2,
    nose=1,
    hands=2,
    legs=2,
    ear=2
};
console.log(humanbody.nose);



enum trafficLight{
    red="stop",
    yellow="wait",
    green="go"
}
console.log(trafficLight.red);


enum Role{
    admin,
    user,
    guest
}
var userRole: Role=Role.admin;
if(userRole == Role.admin){
    console.log("hi admin");
}


enum days{
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    sturday
}
var checkDays: days=days.thursday;
console.log(checkDays);