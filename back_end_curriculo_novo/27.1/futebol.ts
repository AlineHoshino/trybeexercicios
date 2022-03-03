class TimeFutebol {
  private jogadorArrary: Jogador[] //composição

  constructor(){
      this.jogadorArrary = []
  }

  public adicionaJogador(jogador: Jogador){
      this.jogadorArrary.push(jogador)
 
  }
  get array(){
    return this.jogadorArrary;
  }
}

class Jogador {
  private _name: string
  private readonly _yearBirth: number

  constructor(name: string){
      this._name = name
      this._yearBirth = 1990
  }

  setName(name: string) {
      this._name = name
  }

  getName(){
      return this._name
  }
}


const construirTime: TimeFutebol = new TimeFutebol()
const jogador: Jogador = new Jogador("Emerson")

construirTime.adicionaJogador(jogador)
console.log(construirTime.array)
