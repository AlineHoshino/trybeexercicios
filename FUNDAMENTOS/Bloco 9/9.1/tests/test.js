// const person = {
//   nome : 'Aline',
//   sobrenome : 'Hoshino',
// }

// let save = localStorage.setItem('getPerson', person);

// let recuperar = localStorage.getItem('getPerson');


// console.log(recuperar)


// com stringfy e parse

// let save = localStorage.setItem('getPerson', JSON.stringify(person));

// let recuperar = JSON.parse(localStorage.getItem('getPerson'));


// console.log(recuperar)

// Teste 2

 const person = 'aline';

// let save = localStorage.setItem('getPerson', person);

// let recuperar = localStorage.getItem('getPerson');

//  console.log(recuperar)



let save = localStorage.setItem('getPerson', JSON.stringify(person));

let recuperar = JSON.parse(localStorage.getItem('getPerson'));

 console.log(recuperar)
