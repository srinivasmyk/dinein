import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingListService{

  ingredientsChanged= new Subject<Ingredient[]>();
private ingredients:Ingredient[]=[
  new Ingredient('tomatoes',5),
  new Ingredient('apples',10)
];

getIngredients(){
  return this.ingredients.slice();
}

addIngredient(ingredient:Ingredient){

  this.ingredients.push(ingredient);
  this.ingredientsChanged.next(this.ingredients.slice());
}

 addIngredients(ingre:Ingredient[]){
//   for(let ingre of this.ingredients){
// this.addIngredient(ingre);
//   }

this.ingredients.push(...ingre);
this.ingredientsChanged.next(this.ingredients.slice())
}

}
