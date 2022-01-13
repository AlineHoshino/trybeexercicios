const fs = require('fs');

const writeFileFn = (nomeArquivo, conteudo)=>{
  fs.writeFileSync(`${__dirname}/${nomeArquivo}`, conteudo);
  return 'ok';
};

module.exports = {
  writeFileFn,
};