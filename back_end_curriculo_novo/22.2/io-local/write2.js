const fs = require('fs').promises;

async function main() {
  try {
    await fs.readFile('./meu-arquivo.txt', 'Meu textão');
    return 'Arquivo escrito com sucesso!';
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
    throw new Error(`deu ruim`)
  }
}

main().then(sucess=>console.log(sucess)
).catch(error=>console.log(error))