const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt','Meu textão')
.then(()=>{
  console.log('Arqivo escrito com sucesso!')
})
.catch((err)=>{
  console.log(`erro ao escrever o arquivo:${err.message}`)
});
