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
        const resposta = numNaturalFn(10);
        expect(resposta).to.be.equals('positivo')
      });
    });
  });  
})