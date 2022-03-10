"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("./Pizza"));
const PizzaSize_1 = __importDefault(require("./pizzas/PizzaSize"));
const MargheritaPizza_1 = __importDefault(require("./MargheritaPizza"));
const pizza1 = new Pizza_1.default(PizzaSize_1.default.LARGE);
console.log(pizza1.makePizza());
console.log(pizza1.price);
const pizzaMargherita = new MargheritaPizza_1.default(PizzaSize_1.default.LARGE);
console.log(pizzaMargherita.makePizza());
console.log(pizzaMargherita);
console.log(pizzaMargherita.price);
