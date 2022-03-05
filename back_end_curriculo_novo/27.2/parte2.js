"use strict";
class SuperClass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá Mundo!');
    }
}
class Subclass extends SuperClass {
    sayHello2() {
        this.sayHello();
    }
}
const func = (object) => {
    object.sayHello2();
};
const sup = new SuperClass();
const sub = new Subclass();
func(sub);
console.log(sup);
