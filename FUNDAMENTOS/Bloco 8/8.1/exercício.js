// ex 1 gabarito da trybe com vídeo , entendi pelo vídeo 

const employeeGenerator = (fullName) => { // fullName vai receber os parametros da funcao de baixo que é Pedro Guerra 
  const email = fullName.toLowerCase().split(' ').join('_');// diminui para letra minuscula, separa pelo espaço junta de novo com underline para gerar um email válido
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

// ex 2 
// // math.floor tira o numero flutuante ou seja 4,5 por exemplo virando 4 




const verificacao = (numeroApostado, numeroSorteado)=> numeroApostado === numeroSorteado;

const HofSorteio=(numeroApostado,verificacao)=>{
  const numeroSorteado = Math.floor(Math.random() * 5 + 1) //A função "random" gera números aleatórios reais entre (zero e x-1). entao math.random()*5 dá 0 até x-1=5, daí 5-1= 4.Depois, se somar +1, começa com 1 e termina em 5
  verificacao(numeroApostado,numeroSorteado)
  if(numeroApostado === numeroSorteado){
    return "Parabéns você ganhou";
  }
  return "Tente novamente";
}

console.log(HofSorteio(3,verificacao));

//ex 3 Código da Júlia.Através desse exemplo de código
//fica muito nítido que pode ter qqer nome os parametros na funcao, desde que no final você chame as variáveis que o exercício pede

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito),
// o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função
// que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.
// Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver
// resposta (“N.A”) não altera-se a contagem.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checagem = (a,b)=>{
  let pontuacao = 0;
  for ( let i = 0; i <a.length; i +=1){
    if(b[i] === 'N.A'){
      pontuacao += 0;
    }
    else if (b[i] === a[i]){
      pontuacao += 1;
    }
    else{
      pontuacao -= 0.5;// usa subtracao porque errou o gabarito, por isso perde ponto
    }
  }
  return pontuacao;
}

const checagemRespostas = (gabarito, respostas, calllback)=>{
  return calllback(gabarito,respostas);
}

console.log(checagemRespostas(rightAnswers,studentAnswers,checagem));

