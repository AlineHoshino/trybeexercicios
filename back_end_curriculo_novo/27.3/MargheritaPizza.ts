import Pizza from "./Pizza";
import PizzaSize from "./pizzas/PizzaSize";

export default class Margherita extends Pizza {
  constructor(size:PizzaSize){
    super(size);
    this.ingredients.push('basil', 'fresh mozzarella', 'tomatoes');
  }
}
