"use strict";
class Student {
    constructor(enrollment, name) {
        this._name = String();
        console.log(this);
        this._enrollment = enrollment;
        this.theName = name;
        this._examsGrades = [];
        this._worksGrades = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get theName() {
        return this._name;
    }
    set theName(value) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
        this._name = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    IworksGrades(value) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }
        this._worksGrades = value;
    }
    sumNotes() {
        return [...this.examsGrades, ...this.worksGrades]
            .reduce((previousNote, note) => {
            note += previousNote;
            return note;
        }, 0);
    }
    sumAverageNotes() {
        const sumNotes = this.sumNotes();
        const divider = this.examsGrades.length + this.worksGrades.length;
        return Math.round(sumNotes / divider);
    }
}
// Para testar!
const personOne = new Student('202001011', 'Maria da Silva');
personOne.examsGrades = [25, 20, 23, 23];
personOne.IworksGrades([45, 45]);
console.log(personOne.worksGrades);
console.log('Soma de todas as notas: ', personOne.sumNotes());
console.log('Média de todas as notas: ', personOne.sumAverageNotes());
