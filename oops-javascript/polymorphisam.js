class Animal{
    makeSound(){
        console.log("animal makes sound");
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("dog barks")
    }
}

class Cat extends Animal{
    makeSound(){
        console.log("cat meows")
    }
}

const dog=new Dog();
dog.makeSound();

const cat=new Cat();
cat.makeSound();
