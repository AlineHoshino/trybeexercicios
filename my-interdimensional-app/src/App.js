import React from 'react'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }


  async rick(){
    const requisition = await fetch('https://rickandmortyapi.com/api/character');
    const obj = await requisition.json();
    const arrayResults = obj.results;
    this.setState({
      characters: arrayResults,
    })
  }

  componentDidMount() {
    this.rick();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
export default App;
