// //Gabarito ex:1
// const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     console.log (JSON.parse(fileContent));
//   })
//   .then((simpsons) => {
//     return simpsons.map(({ id, name }) => `${id} - ${name}`);
//   })
// .then((strings) => {
//   strings.forEach((string) => console.log(string));
// });

// // Como eu fiz
// const fs = require('fs').promises;

// async function getSimpsonName() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

// const nameSimpson = simpsons.map((simpson)=>{
//   console.log(`${simpson.id} - ${simpson.name}`)
// });
//   return nameSimpson;
// }

// getSimpsonName()

//ex 2
// const fs  = require('fs').promises;

// async function SimpsonId(id){
//   const simpsons= await fs.readFile('./simpsons.json','utf8')
//   .then((content)=> JSON.parse(content));
//   const chosenSimpson = simpsons.find((simpson)=> Number(simpson.id) === id);
//   if(!chosenSimpson){
//     throw new Error('id não encontrado')
//   }
//   return chosenSimpson;
// }


// SimpsonId(20)
// .then(sucess=>console.log(sucess))
// .catch(error=>console.log(error))

// ex 3 

// const fs= require('fs').promises;

// async function filterSimpson(){
//   const simpsons = await fs.readFile('./simpsons.json','utf-8')
//   .then((content)=>JSON.parse(content))
//   const filteredSimpsons = simpsons.filter((simpson)=> simpson.id !=='10' && simpson.id !='6')
//   await fs.writeFile('./simpsons.json',JSON.stringify(filteredSimpsons))
// }

//   filterSimpson()

//ex 4 

// const fs = require('fs').promises;

// async function createSimpsonsFamily() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   const simpsonsFamily = simpsons.filter(simpson => ['1', '2', '3', '4'].includes(simpson.id));

// await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }

// createSimpsonsFamily()


//ex 5 

// const fs = require('fs').promises;

// async function addNelsonToFamily() {
//   const simpsonsFamily = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   simpsonsFamily.push({ id:'8',name: "Nelson Muntz" });

// await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }

// addNelsonToFamily()

// Importamos o módulo de promises do fs
const fs = require('fs').promises;

function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

replaceNelson()