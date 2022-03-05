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
    constructor() {
        super();
        this.isSuper = false;
    }
}
const func = (object) => {
    object.sayHello();
    console.log(object.isSuper ? 'Super' : 'Sub');
};
const sup = new SuperClass();
const sub = new Subclass();
func(sub);
func(sup);
