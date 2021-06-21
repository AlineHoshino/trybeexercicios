const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//ex 1
// const addTurno = (obj,key,value) => obj[key] = value;

// addTurno(lesson2, 'turno', 'manhã');
// console.log(lesson2);

//um outro jeito de fazer que vi no plantao proposto pelo cassio :

// const addTurn = (object, key, keyValue) =>{
//   object[key]=keyValue;
//   return object;
// }
// console.log(addTurno(lesson2, Object.keys(lesson1)[3],lesson1.turno))

/* Aqui o cassio fez o objeto ser o lesson 2, através de Object.keys chamou a lesson 1, e quer a chabe no indice 3, que no caso é turno
// depois chamou o valor da lesson1.turno que é manhã.*/

//ex 2
// const ListObject = lesson3 => Object.keys(lesson3);
// console.log(ListObject(lesson3));

// //ex 3 
// const lengthObject = lesson3 => Object.keys(lesson3).length;
// console.log(lengthObject(lesson3));

// // ex 4 

// const valueObject = obj => Object.values(obj);
// console.log(valueObject(lesson3));

//ex 5 


// const lessons = Object.assign ({},lesson1,lesson2, lesson3);
// console.log(lessons); desse jeito sobscreve

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons)//com a chave nao sobscreve 


