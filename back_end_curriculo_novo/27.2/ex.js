"use strict";
// Crie uma classe _ConsoleLogger_ que implementa _Logger_.
class ConsoleLogger {
    log(param) {
        // Você deve imaginar como o método `log` deve ser implementado, né? 😁.
        console.log(param);
    }
}
// Crie uma classe _ConsoleLogger2_ igual à classe anterior, apenas a título de exemplo.
class ConsoleLogger2 {
    log(param) {
        // No `console.log` dentro do método `log`, diferencie o _ConsoleLogger2_ do _ConsoleLogger_.
        console.log('Logger2: ' + param);
    }
}
// Crie uma classe _ExampleDatabase_ que implementa _Database_.
class ExampleDatabase {
    // _ExampleDatabase_ deve receber o _Logger_ como parâmetro do construtor, e possuir como valor padrão um _ConsoleLogger_.
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    // Dentro do método `save`, chame a função `log` do _Logger_ passado para o database para fazer o log dos parâmetros passados para a `save`.
    save(key, value) {
        this.logger.log(`Salvando o valor ${value} na chave ${key}`);
    }
}
// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();
// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database1.save('chave 2', 'valor 2');
database1.save('chave 3', 'valor 3');
