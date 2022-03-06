"use strict";
// Para testar!
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex1_1 = __importDefault(require("./ex1"));
const maria = new ex1_1.default('Maria da Consolação', new Date('1980/01/25'));
const luiza = new ex1_1.default('Luiza Andrade', new Date('2005/10/02'));
console.log(maria);
console.log(luiza);
// deve retornar erro
//const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));
