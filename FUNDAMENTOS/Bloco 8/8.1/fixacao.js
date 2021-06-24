// Ao chamar a função doingThings:
const wakeUp = ()=> 'Acordando';
const coffe = ()=> 'Bora tomar café!!';
const sleep = ()=> 'Partiu dormir!!'

const doingThings = (functionParam) => {// hoje aprendi que posso colocar qqer nome aqui e ao chamar lá embaixo , function param é substituida pela funcao wakeUp, depois pela coffe, e por ultimo a sleep
  const result = functionParam();
  console.log(result);
};

doingThings(wakeUp);
doingThings(coffe);
doingThings(sleep); 