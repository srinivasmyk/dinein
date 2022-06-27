import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
export class ShoppingListService{

  ingredientsChanged= new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
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

getIngredient(index:number){
  return this.ingredients[index];
}
updateIngredient(index:number, newIngredient:Ingredient){
  this.ingredients[index]=newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());

}

deleteIngredient(index:number){
  this.ingredients.splice(index,1);
  this.ingredientsChanged.next(this.ingredients.slice());
}

}
