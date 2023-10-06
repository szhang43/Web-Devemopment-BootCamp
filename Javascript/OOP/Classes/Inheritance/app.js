class Pet{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }

    feed(){
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet{
    meow() {
        return "Meooow!"
    }
}


class Dog extends Pet{
    bark() {
        return "Woof Woof!"
    }
}

const corgi = new Dog("Corgi", 5);
const pinkCat = new Cat("pinkCat", 1);