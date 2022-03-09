import Pizza from './Pizza';
import PizzaSize from './pizzas/PizzaSize';

const pizza1 = new Pizza(PizzaSize.LARGE);
console.log(pizza1.makePizza());
console.log(pizza1.price);
