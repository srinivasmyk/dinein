import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingredients!:Ingredient[];
private igChangeSub!:Subscription;
  constructor(private slService: ShoppingListService,private router:Router) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients();
     this.igChangeSub= this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
this.ingredients=ingredients;
      }
    );
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);

  }
  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
  }

}
