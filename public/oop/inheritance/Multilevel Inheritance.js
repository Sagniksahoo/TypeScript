"use strict";
class Animal {
    eat() {
        console.log('Eating');
    }
}
class Dog extends Animal {
    bark() {
        console.log('Barking');
    }
}
class BabyDog extends Dog {
    weep() {
        console.log('Weeping');
    }
}
let obj1 = new BabyDog();
obj1.eat();
obj1.bark();
obj1.weep();
