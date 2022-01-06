### Redes docker:

- Bridge faz comunicação pelo tcp-ip
- None: Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um container a ela, o mesmo ficará isolado.
- Host:Ao associarmos um container a essa rede, ela passa a compartilhar toda stack de rede do host 

docker network ls

- Criando uma rede:

docker network create --driver bridge rede-local

rede-local nome da rede

- Cria o container:

docker container run -itd --name novo_container ubuntu

- Depois vincular container a rede:

docker network connect rede-local novo_container


Pode fazer a criacao do container e ja add na rede:

docker container run -it --name outro_container --network rede-local ubuntu


Ver a comunicação :ping novo_container


### Como instalar o docker compose

sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version

Ao dockerizar vamos colocar:

version - que é a versão

service (  são os "tipos" dos containers que iremos rodar.)
coloca a imagem que vai usar
ports a porta que vai conectar
restart- always (reinicia o container aultomaticamente)
depends_on(causa dependência entre os serviços) exemplo colocar o front para iniciar só depois do back 
environment(variáveis de ambiente)
docker-compose up

Volume ajuda na persistência de dados 

docker system prune --volumes (deleta tudo de uma vez)