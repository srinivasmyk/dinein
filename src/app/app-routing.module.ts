import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/recipes',pathMatch:'full'},
  { path:'recipes',component: RecipesComponent, children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component: RecipeEditComponent},
    {path:':id', component:RecipeDetailComponent},
    {path:':id/edit',component: RecipeEditComponent}

  ]},

  { path:'shopping-list',component: ShoppingListComponent, children:[
    {path:'',component:ShoppingEditComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
