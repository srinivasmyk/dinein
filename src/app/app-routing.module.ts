import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/recipies',pathMatch:'full'},
  { path:'recipies',component: RecipesComponent, children:[
    {path:'',component:RecipeStartComponent},
    {path:':id', component:RecipeDetailComponent}
  ]},

  { path:'shopping-list',component: ShoppingListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
