const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (value) => {
  console.log(`O email ${value} esta cadastrado em nosso banco de dados!`);
};
emailListInData.forEach(showEmailList);//for each para pegar cada email fica armazenado na constante

// ex 2 fixacao Find retonra o 1 elemento que preenche o que voce pedir.
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number)=> number % 15 === 0);//esse exercício deixei igual o exemplo da aula do tio Jack, e dividi por 15, porque 15 é divisel por 3 e 5 
/*                                          ^ aqui acima é onde tio jack falou que gera numero por numero */
console.log(findDivisibleBy3And5);

// ex 3 Aqui fiz do jeito que tio Jack fez na aula, baseado no exeplo da pizza que vale menos que 13.
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (names) => {
 return names.find((nome)=> {
   return nome.length === 5;
})
}; 
console.log(findNameWithFiveLetters(names));

// ex 4 fixação de find - código da trybe

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);// vai passar música por música daí musica.id acessa o id de cada música, daí manda achar um id que seja 31031685,automaticamente no console .log passou esse numero 31031685,esse numero fica no lugar da id da linha 38 e tb na linha 39 como se dissesse musica.id=== 31031685
}

console.log(findMusic('31031685'))