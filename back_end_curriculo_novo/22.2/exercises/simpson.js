// //Gabarito ex:1
// const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => {
//     return JSON.parse(fileContent);
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
const fs  = require('fs').promises;

async function SimpsonId(id){
  const simpsons= await fs.readFile('./simpsons.json','utf8')
  .then((content)=> JSON.parse(content));
  const chosenSimpson = simpsons.find((simpson)=> Number(simpson.id) === id);
  if(!chosenSimpson){
    throw new Error('id não encontrado')
  }
  return chosenSimpson;
}


SimpsonId(20)
.then(sucess=>console.log(sucess))
.catch(error=>console.log(error))

