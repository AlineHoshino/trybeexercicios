const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


//  1.Copie esse arquivo e edite apenas ele;
//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');//seleciona o elemento
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value=''
}

divUm.addEventListener('click', handleChangeTech);
divDois.addEventListener('click', handleChangeTech);
divTres.addEventListener('click', handleChangeTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event){//no botao input esta pondo um listener a ao colocar input esta dizendo para mudar o input
  const techElement = document.querySelector('.tech');//ao digitar no input que é caixa, muda os textos das caixas maiores com as 3 tecnologias
  techElement.innerText = event.target.value;
});//parenteses so fecha depois de terminado o evento.Bem interessante isso.
//no exercicio 2 colocou o input como vazio para zerar a caixa de texto desse exercicio aqui 

// 4 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function(){
window.location.replace("https://alinehoshino.github.io/");
});

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
//a cor do mesmo;
myWebpage.addEventListener('mouseover', function(event){
  myWebpage.style.color="yellow";
});



//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
// */

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.