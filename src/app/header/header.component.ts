import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector:'app-header',
  templateUrl:'header.component.html'

})
export class HeaderComponent implements OnInit,OnDestroy{

  private userSub!:Subscription;
  isAuthenticated=false;
  //@Output() featureSelected= new EventEmitter<string>();

//   onSelect(feature:string){
// this.featureSelected.emit(feature)
//   }

ngOnInit(): void {
    this.userSub=this.authServ.user.subscribe(user =>{
this.isAuthenticated=!user? false:true; //!!user can also be used here
    });
}
ngOnDestroy(): void {
    this.userSub.unsubscribe();
}
constructor(private dataStorageServ: DataStorageService, private authServ:AuthService){}
onSaveData(){
  this.dataStorageServ.storeRecipes();

}
onFetchdata(){
 this.dataStorageServ.fetchRecipes().subscribe();
}
}
