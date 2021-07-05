// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const FrutasEAdicional=[...specialFruit, ...additionalItens]
  return FrutasEAdicional;
};

console.log(fruitSalad(specialFruit, additionalItens));

