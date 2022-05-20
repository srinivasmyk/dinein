import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>();

  recipes: Recipe[]=[
    new Recipe("Atest recipe",'this is a test', 'https://previews.123rf.com/images/enterline/enterline1712/enterline171200450/92392058-the-word-recipe-concept-and-theme-painted-in-black-ink-on-a-watercolor-wash-background-.jpg?fj=1'),
    new Recipe("Atest recipe2",'cook', 'https://previews.123rf.com/images/enterline/enterline1712/enterline171200450/92392058-the-word-recipe-concept-and-theme-painted-in-black-ink-on-a-watercolor-wash-background-.jpg?fj=1')
  ];
  constructor() { }

  ngOnInit(): void {
  }
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe)
}

}
