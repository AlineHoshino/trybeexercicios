"use strict";
// ./Car.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(make, color, doors) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    turnOn() {
        console.log("Ligando carro.");
    }
    turnOff() {
        console.log("Desligando carro.");
    }
    turn(direction) {
        console.log(`Virando para a ${direction}.`);
    }
    speedUp() {
        console.log("Acelerando carro.");
    }
    speedDown() {
        console.log("Reduzindo a velocidade do carro.");
    }
    stop() {
        console.log("Parando carro.");
    }
    honk() {
        console.log("Buzinando: BIP BIP");
    }
    openTheDoor(door) {
        console.log(`Abrindo a porta: ${door}.`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a porta: ${door}.`);
    }
}
exports.default = Car;
