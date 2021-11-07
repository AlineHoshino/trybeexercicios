# Readme com resumo sobre criação de imagem, remoção de imagem e dockerfile

##Depois de obter o IMAGE ID , basta executar o comando docker rmi -f <IMAGE ID> , em que rmi vem de " R e m over I magem" ( remove image(s) ).

## docker rmi -f bc11b176a293

 docker container run -d httpd:2.4 

O -d é para dizer que está rodando em background


docker run -d -P --name site-trybe httpd:2.4

-P maiúsculo para ver a porta da minha máquina

Se eu quero que nçao seja uma porta aleatória:

docker run -d -p 54321:80 httpd:2.4

o p é minusculo eu coloco o numero da porta que eu quero no exemplo 54321: 80 que é a porta do container
54321: porta da minha máquina
80: porta do container

Passo a passo criação imagem:

Definir a imagem base, 
Definir uma versão, por padrão pega o latest
Criar a pasta que vai ficar nosso index html
copiar o index para dentro da nossa imagem 
definir qual a porta que vai rodar
setar variaveis

FROM nginx
 
COPY source:fonte de onde vem destine para onde vai 
 
EXPOSE port: qual porta nossa aplicação vai rodar
 
ENV key=value semelhante a uma variável
 
ENTRYPOINT qual executavel nosso container vai usar
 
CMD parametros que serão enviados para esse executavel
 

Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host .
  docker inspect <COLOQUE AQUI SEU CONTAINER ID>

echo $PATH para ver o caminho

 ## Gerar build a partir do dockerfile:
docker build -t roz/hello-nginx:latest

t de tag para imagem 

--name para container

Alteração no sistema de arquivo gera uma camada nova

docker container run cowsay -f dragon-and-cow "#VQV TRYBE"

-f vem de filter

docker logs container id 
ver os logs


Para ver o site dentro do container:
docker exec -it container id bash 
curl http://localhost:80

para ter o mysql 
baixa a imagem : docker pull mysql
docker run --name container-mysql -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=Trybe123 mysql --default-authentication-plugin=mysql_native_password

Porta 3306 já estava em uso aparece esse erro:
bind: address already in use.
Cria o contianer, mas sem porta
Tive que parar o mysql : sudo systemctl stop mysql
stop o container docker: container stop be8a
da o start:docker container start be8a

Instalar o mongo:
docker pull mongo
docker run --name container-mongo -p 27017:27017 -d mongo
