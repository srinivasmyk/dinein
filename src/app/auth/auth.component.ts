import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector:'app-auth',
  templateUrl:'./auth.component.html'
})

export class AuthComponent{
  isLoginMode=true;
  isLoading=false;
  error:string="";

  constructor(private authServ:AuthService){}
  onSwithMode(){

    this.isLoginMode=!this.isLoginMode;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email= form.value.email;
    const password= form.value.password;
let authObs:Observable<AuthResponseData>;

    this.isLoading=true;
    if(this.isLoginMode){
 authObs= this.authServ.login(email,password);
    }else{
      authObs= this.authServ.signup(email,password);
    }

    authObs.subscribe(resData =>{
      console.log(resData);
    this.isLoading=false;

    },errorRes =>{
      console.log(errorRes);
      this.error=errorRes;
    this.isLoading=false;

    })

    form.reset();
  }
}
