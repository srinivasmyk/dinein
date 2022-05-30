import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

  ingredientsChanged= new EventEmitter<Ingredient[]>();
private ingredients:Ingredient[]=[
  new Ingredient('tomatoes',5),
  new Ingredient('apples',10)
];

getIngredients(){
  return this.ingredients.slice();
}

addIngredient(ingredient:Ingredient){

  this.ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.ingredients.slice());
}

 addIngredients(ingre:Ingredient[]){
//   for(let ingre of this.ingredients){
// this.addIngredient(ingre);
//   }

this.ingredients.push(...ingre);
this.ingredientsChanged.emit(this.ingredients.slice())
}

}
