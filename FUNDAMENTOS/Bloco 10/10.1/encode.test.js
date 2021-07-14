const { encode, decode } = require("./encode.js");

describe("parte 2", () => {
  it("Teste se encode é função", () => {
    expect(typeof encode).toEqual("function");
  });
  it("Testando se decode é função", () => {
    expect(typeof decode).toEqual("function");
  });
  it("a é convertido para 1", () => {
    expect(encode("pata")).toEqual("p1t1"); // testando se a vira 1, e se as consoantes continuam como consoantes
  });
  it("e é convertido para 2", () => {
    expect(encode("este")).toEqual("2st2");
  });
  it("i é convertido para 3", () => {
    expect(encode("li")).toEqual("l3");
  });
  it("o é convertido para 4", () => {
    expect(encode("ovo")).toEqual("4v4");
  });
  it("u é convertido para 5", () => {
    expect(encode("urubu")).toEqual("5r5b5");
  });
  it("1 é convertido para a", () => {
    expect(decode("p1t1")).toEqual("pata"); // testando o contrário se o número vira vogal, e se consoantes continuam como consoantes
  });
  it("2 é convertido para e", () => {
    expect(decode("2st2")).toEqual("este");
  });
  it("3 é convertido para i", () => {
    expect(decode("l3")).toEqual("li");
  });
  it("4 é convertido para o", () => {
    expect(decode("4v4")).toEqual("ovo");
  });
  it("5 é convertido para u", () => {
    expect(decode("5r5b5")).toEqual("urubu");
  });
  it("Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(encode("urubu").length).toEqual(5);
  });
  it("Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(decode("5r5b5").length).toEqual(5);
  });
});
