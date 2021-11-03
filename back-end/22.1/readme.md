### Comandos no terminal para o docker 

## O container é um processo Docker que, internamente, possui tudo aquilo que é necessário para seu funcionamento: Sistema Operacional (Binários e Bibliotecas) e recursos necessários para sua aplicação;

## A imagem é uma espécie de "fotografia" de um container , nós resgatamos uma imagem, quando queremos iniciar um novo container a partir de uma estrutura já conhecida.

# O formato do comando para rodar um container é o seguinte:

docker container run <nome-da-imagem>:<tag>
Ex: docker container run ubuntu

# Vamos aqui imprimir na tela um "Hello Tryber!" no terminal do Ubuntu, usando o comando echo do shell :

docker container run ubuntu echo 'Hello Tryber!'

docker ps -l (para mostrar qual foi o último container criado)

docker container ls -a -> para mostrar todos os containers

# Inicie o mesmo container novamente: 
docker start 07 

# Remover um container não ativo

docker container rm <CONTAINER ID || NAMES>

# remover um container ativo

docker container rm -f <CONTAINER ID || NAMES>

F - vem de forçar

* Note que o comando start difere do comando run . O start apenas inicia o container que já havia sido criado (mas estava inativo), enquanto o run cria e executa um novo container!

# Rodando o container de forma interativa
E se quisermos, por exemplo, utilizar um terminal dentro do container (à la inception) ? É só passar o parâmetro -ti * ao comando run que dá acesso a esse terminal*:
* O comando -ti são dois comandos juntos:
-t que indica pro docker que estamos requisitando um terminal no container que consiga imprimir o retorno dos nossos comandos;
-i que estabelece uma interface de comunicação física com esse terminal, no caso, por meio do teclado.

docker container run -ti ubuntu

# Retomando o acesso a um container interativo rodando em segundo plano
Caso você tenha iniciado um container em segundo plano utilizando -dit , você pode acessar esse container rodando o comando attach :

docker container attach <CONTAINER ID || NAMES>

# remove todos os containers inativos

docker container prune