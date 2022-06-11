import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

  

  private recipes: Recipe[]=[
    new Recipe("Atest recipe",'this is a test', 'https://previews.123rf.com/images/enterline/enterline1712/enterline171200450/92392058-the-word-recipe-concept-and-theme-painted-in-black-ink-on-a-watercolor-wash-background-.jpg?fj=1',[new Ingredient('French Fries',20)]),
    new Recipe("Atest recipe2",'cook', 'https://previews.123rf.com/images/enterline/enterline1712/enterline171200450/92392058-the-word-recipe-concept-and-theme-painted-in-black-ink-on-a-watercolor-wash-background-.jpg?fj=1',[new Ingredient('French Fries',20)])
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientShoppingList(ingre:Ingredient[]){
this.slService.addIngredients(ingre);
  }
}
