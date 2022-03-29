"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `myNumber + myParam: ${this.myNumber + myParam}`;
    }
}
const obj = new MyClass(2);
console.log(obj.myNumber);
console.log(obj.myFunc(4));
