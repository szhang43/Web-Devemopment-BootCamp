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
    constructor(name, age, lives=9){
        super(name, age);
        this.lives = lives;
    }
    meow() {
        return "Meooow!"
    }

    totalLives() {
        return `Number of lives : ${this.lives}`;
    }

    removeLives() {
        this.lives -= 1; 
        return `${this.lives} left`
    }
}


class Dog extends Pet{
    bark() {
        return "Woof Woof!"
    }
}

const corgi = new Dog("Corgi", 5);
const pinkCat = new Cat("pinkCat", 1);