// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import  arrayPokemons from './data';  // todo o array de pokemon 
import Pokedex from './Pokedex'// chamando a pokedex arquivo

class App extends React.Component {
  render() {
    return (
    <div >
      <h1>Pokédex</h1>
      <Pokedex pokemons = {arrayPokemons}/>{/* Chamei um componente passando a propriedade  pokemons e dentro o array de pokemons*/}
    </div>
    );
  }
}

export default App;