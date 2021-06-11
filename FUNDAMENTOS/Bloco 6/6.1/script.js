const states = document.querySelector("#estado")

function States(){
  const allStates=['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  for (let index = 0; index < allStates.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions)
    createOptions.innerText = allStates[index];
    createOptions.value = allStates[index]
  }
}


window.onload=function(){
States()
}

