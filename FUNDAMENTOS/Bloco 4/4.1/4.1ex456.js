//ex.4
let a = 0;
if (a > 0) {
  console.log("positivo");
} else if (a < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}
//ex5
let anguloa = -65;
let angulob = 120;
let anguloc = 5;
let soma = anguloa + angulob + anguloc;
let angulopositivo = anguloa > 0 && angulob > 0 && anguloc > 0;
if (angulopositivo) {
  if (soma === 180) {
    consolee.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("ângulo inválido");
}
//ex 6
let peca = "Cavalo";
switch (peca.toLowerCase()) {
  case "cavalo":
    console.log("cavalo-> anda em l pode pular peça");
    break;
  case "rei":
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo-> diagonal");
  case "rainha":
    console.log("ranha->Diagonal, horizontal e vertical");
    break;
  case "peão":
    console.log("peão->penas uma casa para frente, no primeiro movimento pode ser 2 casas");
    break;
    case "torre":
      console.log("torre->horizontal e vertical")
      default:
        console.log("Peça inválida")
}
