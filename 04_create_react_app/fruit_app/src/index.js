import foods from './foods';
import { choice, remove } from './helpers';


let randomFood = choice(foods);
let remaining = remove(foods, randomFood);
console.log(remaining);
