"use strict";
class Character {
}
class MeeleeCharacter extends Character {
    constructor(name, specialMoveName) {
        super();
        this.name = name;
        this.specialMoveName = specialMoveName;
    }
    talk() {
        /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
        console.log(`Hi, I'm ${this.name}. I attack at close range.`);
    }
    specialMove() {
        /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
        console.log(this.specialMoveName);
    }
}
class LongRangeCharacter extends Character {
    constructor(name, specialMoveName) {
        super();
        this.name = name;
        this.specialMoveName = specialMoveName;
    }
    talk() {
        /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
        console.log(`Hi, I'm ${this.name}. I can attack from a long range. `);
    }
    specialMove() {
        /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
        console.log(this.specialMoveName);
    }
}
function characterPresentation(character) {
    character.talk();
    character.specialMove();
}
const yoshi = new MeeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');
characterPresentation(yoshi);
characterPresentation(samus);
