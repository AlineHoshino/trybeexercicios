### Comandos no terminal para o docker 

## O container é um processo Docker que, internamente, possui tudo aquilo que é necessário para seu funcionamento: Sistema Operacional (Binários e Bibliotecas) e recursos necessários para sua aplicação;

## A imagem é uma espécie de "fotografia" de um container , nós resgatamos uma imagem, quando queremos iniciar um novo container a partir de uma estrutura já conhecida.

# O formato do comando para rodar um container é o seguinte:

docker container run <nome-da-imagem>:<tag>
Ex: docker container run ubuntu

# Vamos aqui imprimir na tela um "Hello Tryber!" no terminal do Ubuntu, usando o comando echo do shell :

docker container run ubuntu echo 'Hello Tryber!'

docker ps -l (para mostrar qual foi o último container criado)

docker container ls -a -> para mostrar todos os containers, até os que estão parados

# Inicie o mesmo container novamente: 
docker start 07 

# Remover um container não ativo

docker container rm <CONTAINER ID || NAMES>

# remover um container ativo

docker container rm -f <CONTAINER ID || NAMES>

F - vem de forçar

* Note que o comando start difere do comando run . O start apenas inicia o container que já havia sido criado (mas estava inativo), enquanto o run cria e executa um novo container!

# Rodando o container de forma interativa

docker container run -it debian:stable-slim

Rode os comandos diretamente no container

cat /etc/*-release - para ver a distribuição debian

# Retomando o acesso a um container interativo rodando em segundo plano
Caso você tenha iniciado um container em segundo plano utilizando -dit, você pode acessar esse container rodando o comando attach :

docker container attach <CONTAINER ID || NAMES>

# remove todos os containers inativos

docker container prune

# dockerfile 

Arquivo de instrução para montar o ambiente

# docker registry 

Armazena as imagens do docker

A imagem é o conteudo necessario para executar a aplicação 

docker create só cria o container, mas não roda
daí precisa dar start , uma vez que dei start posso dar um stop.