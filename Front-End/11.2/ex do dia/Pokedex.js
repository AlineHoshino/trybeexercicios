import React from 'react';
import Pokemon from './Pokemon';// tem de chamar o arquivo que vou usar

class Pokedex extends React.Component{
  render(){
    const {pokemons} = this.props; //chamou a propriedade pokemons e usou this props para pegar o que tem lá
      return(
        <div className= 'container'> {/*<>isso é uma fragmentação </>*/}
        {pokemons.map((pokemon) => <Pokemon key = {pokemon.id} pokemon= {pokemon}/>)}{/* deu map nos pokemons e chamou um por um passando um componente que recebe key e os pokemons*/}
        </div>// primeiria chave usada porque chamei javascript 
      ); 
  }
}

export default Pokedex;