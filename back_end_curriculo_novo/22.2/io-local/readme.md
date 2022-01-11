Atributos adicionais na utilização de métodos de leitura e escrita no fs
No writeFile , assim como o readFile , você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional seus métodos.
A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w' , que especifica que o arquivo deve ser aberto para escrita.
Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx' , por exemplo, funciona como 'w' , mas lança um erro caso o arquivo já exista:
fs- pedir para o node interagir com os arquivos