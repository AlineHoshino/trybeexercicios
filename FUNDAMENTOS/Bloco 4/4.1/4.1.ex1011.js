let valorCusto = 1000;
let valorVenda= 1500;
let valorCustoTotal = valorCusto + 0.2*(valorCusto);
let lucro = valorVenda -valorCustoTotal;

if(valorCusto>=0 &&valorVenda>=0){
  console.log(lucro*1000)
}else{
  console.log("erro")
}
//ex 11
let salarioBruto= 2594.93;
if(salarioBruto<=1556.94){
  descontoInss=salarioBruto*0.08;
}else if(salarioBruto<= 2594.92){
  descontoInss=salariobruto*0.09;
}else if(salarioBruto<=5189.82){
  descontoInss=salarioBruto*0.11;
}else{
  descontoInss=570,78
}
let salarioBase=salarioBruto- descontoInss;
if(salarioBase<=1903.98){
  salarioBase - 0;
}else if(salarioBase<=2826,65){
  irDesconto=salarioBase*0.075 - 142.80;
}else if(salarioBase<=3751.05){
  irDesconto=salarioBase*0.15 -354.80;
}else if(salarioBase<=4664.68){
  irDesconto=salarioBase*0.225 -636.13;
}else if (salarioBase>4664.68){
  irDesconto=salarioBase*0.275 - 869.36;
}

let salarioliquido = salarioBase-irDesconto;
console.log(salarioliquido);