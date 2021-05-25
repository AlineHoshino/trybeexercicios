//parte 1 objetos e for in

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log("Bem-vinda " + info.personagem)
// //ex2
info.recorrente='Sim';
//ex 3 
for (let key in info){
  console.log(key);
}
//ex4
for (let key in info){
  console.log(info[key]);
}
//ex 5 
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for( let key in info){
  if(info[key]===info.recorrente && 
    info.recorrente ==='Sim' && info2.recorrente==='Sim'){
console.log("Ambos recorrentes")
  }else{
    console.log(info[key] + 'e' + info2[key])
  }   
}