Classe- modela com precisão a representação de uma entidade do mundo real.

como instalei o compilador globalmente usei:

tsc --init para criar o tsconfig

outra opcao : npx tsc --init

para compilar: npx tsc


**Os atributos criados com o modificador private só podem ser lidos e modificados dentro da classe**. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe, você terá um erro do compilador.
Os atributos criados com o modificador readonly podem ser lidos em qualquer lugar, mas só podem ser inicializados uma vez, no construtor. Apesar desse modificador não estar exatamente ligado a Orientação a Objetos, mas é legal que você saiba da existência dele 😉.
**Para alterar atributos privados fora de uma classe, utilizamos os métodos**. Eles validam as leituras e alterações, de forma a não comprometer o funcionamento da classe. Por exemplo, você pode ter uma classe Pessoa com o atributo dataDeNascimento privado, e possuir um método para mudar esta data de nascimento de forma a validar se é digitada uma data válida. Para ler os valores dos atributos, podemos criar os métodos getters , e para modificar, os métodos setters .