Módulos permitem separar o código em "pedaços" isolados.
Precisam exportar qualquer variável ou função que deva estar visível para outros módulos
Node possui módulos internos (core modules):
fs: fornece uma Api para interagir
url: utilitários para ler e manipular URL
querystring:leitura e manipulação de parametros de URL
util:ferramentas úteis

Vai no terminal : mkdir package-nodejs npm init
package name:nome 
version:
description: Meu primieor pacote nodeJs
entry point:
test command:
git repository:
keywords:
author:seu nome

Forma mais rápida de criar o pcaote npm init -y

no package.json na parte scripts:
"start":"node index.js"

acima se quiser que o codigo rode com npm start 

para rodar com npm run imc

"imc":"node imc.js"

para solicitar dados da pessoa podemos usar o readline-sync para instalar ele é npm i readline-sync

Para acessar use 
const readline = require('readline-sync');

Exemplo:

function velocidade(){
  const dist= readline.questionInt('Distancia percorrida em metros');
  const tempo= readline.questionInt('Tempo gasto em s');
  const velocidadeMedia = (dist/tempo).toFixed(2);
  console.log(`Velocidade média:${velocidadeMedia} m/s`) 
}

velocidade()

exports.algumaCoisa ='lalala'// Não recomendada
module.exports.algumaCoisa='lalala'