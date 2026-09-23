class Person{
    name;
    constructor(pname){
        this.name=pname;
    }

    introduce(){
        console.log("my name is: "+this.name);
        }
}

class Student extends Person{
    course;
    constructor(pname,pcourse){
        super(pname);          // calling parent constructor
        this.course=pcourse;
    }
    displayDetails(){
        console.log("name:"+this.name+"\n course is:"+this.course);
    }
}

const student=new Student("janu","javascript");
student.introduce();
student.displayDetails();
