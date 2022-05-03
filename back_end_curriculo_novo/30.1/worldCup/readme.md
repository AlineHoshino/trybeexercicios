Não esquecer do ts config.

Populando o banco
Antes de iniciarmos, certifique-se de ter o MongoDB instalado na sua máquina. Caso não tenha, consulte o conteúdo sobre MongoDB ou use uma imagem docker do MongoDB, utilizando o comando docker run --name mongo-crud -d -p 27017:27017 -e AUTH=no mongo .
Abra o console do MongoDB local ou via Docker com docker exec -it mongo-crud mongo e execute o código abaixo para popular o banco: