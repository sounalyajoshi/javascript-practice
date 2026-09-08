import {fruitName} from "./class1.js";
console.log(`my fav fruit is:${fruitName}`);

import { name } from"./class1.js";
console.log("jhon");

import { mobileGoods, garmentGoods } from "./class1.js";

var mobileProduct = new mobileGoods();
var mobileDetails = mobileProduct.getproductDetails();

console.log(mobileDetails);

var garmentProduct =new garmentGoods();
var garmnetDetails=garmentProduct.getproductDetails();
console.log(garmnetDetails);



import { Student ,College } from "./class1.js";

var studentDetails=new Student("jhon",22);
var getStudent=studentDetails.displayStudent();
console.log(getStudent);




var collegeDetails=new College("TC college");
var getColleg=collegeDetails.displayCollege();
console.log(getColleg);