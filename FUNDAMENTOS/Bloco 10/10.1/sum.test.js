const sum = require("./sum"); // chama arquivo js

//A função describe cria um bloco para agrupar vários testes
describe('Parte1', () => {
  // describe recebe dois parametros texto e uma funcao anonima
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    // it tb dois parametros o texto do que vc está fazendo, e depois a funcao anonima com o teste.
    expect(sum(4, 5)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow(); // tem de abrir uma função anonima que chama a função, porque se chamar direto a função, vai executar a função e não vê se tem o erro
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers")); //Para testar a mensagem de erro, como fizemos neste 4 teste , usamos o matcher toThrowError e passamos dentro do parênteses a mensagem que será mostrada em caso de erro: new Error("parameters must be numbers")
  });
});
