"use strict";
class TimeFutebol {
    constructor() {
        this.jogadorArrary = [];
    }
    adicionaJogador(jogador) {
        this.jogadorArrary.push(jogador);
    }
    get array() {
        return this.jogadorArrary;
    }
}
class Jogador {
    constructor(name) {
        this._name = name;
        this._yearBirth = 1990;
    }
    setName(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}
const construirTime = new TimeFutebol();
const jogador = new Jogador("Emerson");
construirTime.adicionaJogador(jogador);
console.log(construirTime.array);
