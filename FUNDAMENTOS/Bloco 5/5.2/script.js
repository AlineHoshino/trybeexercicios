//ex1
const ondeVcEsta=document.querySelector("#elementoOndeVoceEsta");
//ex 2
const pai = ondeVcEsta.parentElement;
pai.style.color="red"
// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const filhodofilho= ondeVcEsta.firstElementChild;
filhodofilho.innerHTML="Hoje aprendi sobre os filhos do html"
//4
 const primeiroFilho= pai.firstElementChild;
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2= ondeVcEsta.previousElementSibling;//sibling signfica irmão 
 // 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
 const atencao=ondeVcEsta.nextSibling; //atenção é um nó, por isso precisa ser o proximo irmao trazido na forma de nó.
 // 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
 const terceiroFilho= ondeVcEsta.nextElementSibling;//aqui pega o elemento html
  // 8. Agora acesse o terceiroFilho a partir de pai.
  const terceiroFilho2= pai.lastElementChild.previousElementSibling;//fui para o ultimo filho do pai que é o 4 ultimoflilho, e usa previouselementsibling, para puxar o irmao dele que esta acima