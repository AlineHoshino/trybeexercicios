import Pizza from './Pizza';
import PizzaSize from './pizzas/PizzaSize';
import Margherita from './MargheritaPizza';

const pizza1 = new Pizza(PizzaSize.LARGE);
console.log(pizza1.makePizza());
console.log(pizza1.price);


const pizzaMargherita = new Margherita(PizzaSize.LARGE);
console.log(pizzaMargherita.makePizza());
console.log(pizzaMargherita);
console.log(pizzaMargherita.price);