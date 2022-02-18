void - função que não possui um retorno 

class- como um projeto para criação de objetos 

constructor - usada para construir um objeto

Também é possível dizer que uma das propriedades da nossa classe Person não é obrigatória para criarmos um objeto pessoa, podemos usar o caractere ? para marcar uma propriedade como opcional, o que faz com seu tipo seja um union type entre o tipo original e undefined . Se quiséssemos dizer que a cor dos olhos não é obrigatória nossa classe ficaria assim:

class Person {
    name: string;
    birthDate: Date;
    eyeColor?: EyeColor;
