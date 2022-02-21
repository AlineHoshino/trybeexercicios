"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
const monthsNames = Object.values(Months_1.default).
    map(item => item);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
if (choiceMonth === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const seasonsSouth = {
    [Seasons_1.default.OUTONO]: [Months_1.default.MARCO, Months_1.default.ABRIL, Months_1.default.MAIO, Months_1.default.JUNHO],
    [Seasons_1.default.INVERNO]: [Months_1.default.JUNHO, Months_1.default.JULHO, Months_1.default.AGOSTO, Months_1.default.SETEMBRO],
    [Seasons_1.default.PRIMAVERA]: [Months_1.default.SETEMBRO, Months_1.default.OUTUBRO, Months_1.default.NOVEMBRO, Months_1.default.DEZEMBRO],
    [Seasons_1.default.VERAO]: [Months_1.default.DEZEMBRO, Months_1.default.JANEIRO, Months_1.default.FEVEREIRO, Months_1.default.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [Seasons_1.default.PRIMAVERA]: seasonsSouth[Seasons_1.default.OUTONO],
    [Seasons_1.default.VERAO]: seasonsSouth[Seasons_1.default.INVERNO],
    [Seasons_1.default.OUTONO]: seasonsSouth[Seasons_1.default.PRIMAVERA],
    [Seasons_1.default.INVERNO]: seasonsSouth[Seasons_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
if (choiceHemisphere === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const month = Object.values(Months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
// ./index.ts
const Car_1 = __importDefault(require("./Car"));
const Colors_1 = __importDefault(require("./Colors"));
const Directions_1 = __importDefault(require("./Directions"));
const Doors_1 = __importDefault(require("./Doors"));
const gol = new Car_1.default("Volksvagem", Colors_1.default.SILVER, 4);
gol.openTheDoor(Doors_1.default.DRIVER);
gol.closeTheDoor(Doors_1.default.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors_1.default.BEHIND_RIDE);
gol.closeTheDoor(Doors_1.default.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions_1.default.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors_1.default.BEHIND_RIDE);
gol.closeTheDoor(Doors_1.default.BEHIND_RIDE);
gol.speedUp();
const nutela = {
    flavor: "Nutela",
    slices: 4
};
console.log(nutela);
const calabresa = {
    flavor: "Calabresa",
    slices: 6
};
console.log(calabresa);
const frango = {
    flavor: "Frango",
    slices: 8
};
console.log(frango);
const pepperoni = {
    flavor: "Pepperoni",
    slices: 6
};
console.log(pepperoni);
const marguerita = {
    flavor: "Marguerita",
    slices: 8
};
console.log(marguerita);
const palmito = {
    flavor: "Palmito",
    slices: 8
};
console.log(palmito);
const goiabadaEQueijo = {
    flavor: "Goiabada com Queijo",
    slices: 4
};
console.log(goiabadaEQueijo);
