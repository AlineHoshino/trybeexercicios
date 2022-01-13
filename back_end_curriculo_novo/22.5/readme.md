A primeira coisa que você precisa saber sobre middlewares é que, no Express qualquer função passada para uma rota é um middleware

Criando middleares globais com aap.use=>se colocar um middleare dentro do app.use(), tudo que vier abaixo dele vai passar por esse middleare.

 Outro middleware bem comum de utilizarmos nas nossas aplicações back-end é o cors , que permite que nossa API receba requisições de outras aplicações, como por exemplo, uma aplicação front-end que consuma nossa API. O uso básico desse módulo é instalá-lo usando npm i cors e adicionando as seguintes linha no nosso código.

 Middlewares podem ser declarados em sequência

 A função next é usado para partir para o próximo middleare

 Middleares podem ser reaproveitados 

 function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

ao fazer o post estou chamando o validateName

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...

aqui também chamando o validate name

Middleares de erro  - 4 aparametros - erro, req,res,next

app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  /* passa o erro para o próximo middleware */
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.json({ error: err });
});

Repare que estamos fazendo next(err) na linha 4. Isso diz ao Express que ele não deve continuar executando nenhum middleware ou rota que não seja de erro. Ou seja, quando passamos qualquer parâmetro para o next , o Express entende que é um erro e deixa de executar middlewares comuns , passando a execução para o próximo middleware de erro registrado para aquela rota, router ou aplicação.

fazer as instalações de npm i express body-parser express-rescue
npm i nodemon -D

no script:
"dev" :"nodemon index.js"

O pacote express-rescue está disponível no npm e nos ajuda com a tarefa de garantir que os erros sempre sejam tratados. Para utilizá-lo, primeiro faça a instalação usando o comando npm i express-rescue
Para adicionarmos os express-rescue , basta passarmos o nosso middleware como parâmetro para a função rescue que importamos do módulo. Essa função vai gerar um novo middleware que vai fazer o tratameto de erros da middleware sem precisarmos escrever o try/catch 

This is a dependecy free wrapper (or sugar code layer if you will) for async middlewares which makes sure all async errors are passed to your stack of error handlers, allowing you to have a cleaner and more readable code.