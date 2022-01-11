const {expect} = require('chai');

const numNaturalFn = require('./numerosNaturais');

describe('Executa a função numNaturalFn',() =>{
  describe('Quando o número for maior que 0',()=>{
    describe('a resposta', () =>{
      it('é uma string',()=>{
        const resposta = numNaturalFn(10);
        expect(resposta).to.be.a('string');
      });
      it('é igual a "positivo"',() =>{
        const resposta = numNaturalFn(10);
        expect(resposta).to.be.equals('positivo')
      });
    });
  });
  describe('Quando o número for menor que 0',()=>{
    describe('a resposta', () =>{
      it('é uma string',()=>{
        const resposta = numNaturalFn(-1);
        expect(resposta).to.be.a('string');
      });
      it('é igual a "negativo"',() =>{
        const resposta = numNaturalFn(-1);
        expect(resposta).to.be.equals('negativo')
      });
    });
  });
  describe('Quando o número for igual a 0', ()=>{
    describe('a resposta',()=>{
      it('é uma string', ()=>{
        const resposta = numNaturalFn(0);
        expect(resposta).to.be.a('string')
      });
      it('é igual a "neutro"',()=>{
        const resposta = numNaturalFn(0);
        expect(resposta).to.be.equals('neutro')
      });
    });
  });
  describe('Quando o parametro não é numero', ()=>{
    describe('a resposta',()=>{
      it('é uma string', ()=>{
        const resposta= numNaturalFn('Hello')
        expect(resposta).to.be.a('string');
      });
      it('é igual a "o parametro deve ser um numero"',()=>{
        const resposta= numNaturalFn('Hello')
        expect(resposta).to.be.equals('o parametro deve ser um número')
      });
    });
  });
});