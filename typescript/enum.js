"use strict";
//  here we directly not run the typescript so we first convert into javascript then connect in index .
// html you get output in live server.
var humanbody;
(function (humanbody) {
    humanbody[humanbody["eye"] = 2] = "eye";
    humanbody[humanbody["nose"] = 1] = "nose";
    humanbody[humanbody["hands"] = 2] = "hands";
    humanbody[humanbody["legs"] = 2] = "legs";
    humanbody[humanbody["ear"] = 2] = "ear";
})(humanbody || (humanbody = {}));
;
console.log(humanbody.nose);
var trafficLight;
(function (trafficLight) {
    trafficLight["red"] = "stop";
    trafficLight["yellow"] = "wait";
    trafficLight["green"] = "go";
})(trafficLight || (trafficLight = {}));
console.log(trafficLight.red);
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["guest"] = 2] = "guest";
})(Role || (Role = {}));
var userRole = Role.admin;
if (userRole == Role.admin) {
    console.log("hi admin");
}
var days;
(function (days) {
    days[days["monday"] = 0] = "monday";
    days[days["tuesday"] = 1] = "tuesday";
    days[days["wednesday"] = 2] = "wednesday";
    days[days["thursday"] = 3] = "thursday";
    days[days["friday"] = 4] = "friday";
    days[days["sturday"] = 5] = "sturday";
})(days || (days = {}));
var checkDays = days.thursday;
console.log(checkDays);
