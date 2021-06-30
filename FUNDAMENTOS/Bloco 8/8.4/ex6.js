const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return alunos.map((aluno, index) => {
    return {
    name: aluno,
    average: notas[index].reduce((total, nota) =>{
      console.log(`acc:${total}, curr:${nota}`);
     return (total + nota)}) / notas[index].length
    }
   })
  }


studentAverage()

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// assert.deepEqual(studentAverage(), expected);

function studentAverage() {
  return alunos.map((aluno, index) => {//segundo parametro do map é o index
    return {
    name: aluno,// vai vir aluno por aluno
    average: notas[index].reduce((acc, nota) => acc + nota) / notas[index].length //o mesmo index do aluno é também das notas o indice 0 de alunos representa o Pedro e o indice 0 das notas representa notas do pedro
  }})
}
//Notas do Pedro
/*acc:9, curr:8
acc:17, curr:10
acc:27, curr:7
acc:34, curr:5
Total : 34+5 =39
//como são 5 notas 39/5=7.8

//notas miguel
acc:10, curr:9
acc:19, curr:9
acc:28, curr:10
acc:38, curr:8
Total:38+8=46
//como são 5 notas 46/5=9.2

//notas Maria
acc:10, curr:7
acc:17, curr:10
acc:27, curr:8
acc:35, curr:9
Total: 35+9=44
//como são 5 notas 44/5=8.8 */

