import PizzaSize from "./pizzas/PizzaSize";

export default class Pizza {
  protected size: PizzaSize;
  protected ingredients: string[];
  constructor( size: PizzaSize){
    this.size = size;
    this.ingredients = ['massa'];
  }

  public makePizza(): string {
    return `${this.size} pizza está sendo preparada!`
  };

  public get price():number {
    const pizzaPrices ={
      "medium":25,
      "large":30,
      "extra-large":38
    }
    const price = pizzaPrices[this.size]?? pizzaPrices.large
    //Descrição
//O operador de coalescência nula(??) retorna os resultados da expressão de seu lado direito se a expressão de seu lado esquerdo for null ou undefined.
    return price
  }
}