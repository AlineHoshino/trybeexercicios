Vamos iniciar a configuração do Docker. Crie o arquivo Dockerfile para definirmos como será nossa imagem docker usando o modelo abaixo.

FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]

Depois precisa fazer o yml

build:
  docker:
    web: Dockerfile
run:
  web: node index.js

Antes de realizarmos o deploy, precisamos informar que o Heroku irá trabalhar como um container . Então será necessário alterar a stack de trabalho, ou seja, a imagem do sistema operacional que será executada, por padrão o Heroku utiliza a stack Heroku 20 , uma imagem contendo Ubuntu 20.04 . Para verificar qual Stack seu aplicativo está utilizando bastar executar

heroku stack

heroku stack -a nome-da-sua-aplicação # Para o caso de mais de um aplicativo

por o dotenv no repositório server
Criando banco de dados no supabase
por o arquivo ,env na raiz do repositorio

arquivo .env 

    //Arquivo .env
    //# EXEMPLO
    PASSWORD_POSTGRES=13244
    HOST=db.minhaurldeconexao.supabase.co
    DATABASE=meubanco
    DB_USERNAME=userhost
    DB_PORT=6543

Estes dados estão nas settings database vem todos os dados que serão colocados na env

configurar as variáveis de ambiente do back-end

fazer as migration e seeds
consumir  api com o cors
