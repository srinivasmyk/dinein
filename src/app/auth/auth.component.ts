import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
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




  constructor(private authServ:AuthService, private router:Router){}
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
    this.router.navigate(['./recipes']);
    //passing user and account objects:
aptrinsic("identify",
{
//User Fields
  "id": "unique-user-id", // Required for logged in app users
  "email": "userEmail@address.com",
  "firstName": "John",
  "lastName": "Smith",
  "signUpDate": 1522697426479, //unix time in ms
  "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
  "price" : 95.5,
  "userHash": "" // optional transient for HMAC identification
},
{
//Account Fields
  "id":"IBM", //Required
  "name":"International Business Machine",
  "Program": "Platinum" // flat custom attributes
});

    },errorRes =>{
      console.log(errorRes);
      this.error=errorRes;
    this.isLoading=false;

    })

    form.reset();
  }
}
function aptrinsic(arg0: string, arg1: {
  //User Fields
  id: string; // Required for logged in app users
  email: string; firstName: string; lastName: string; signUpDate: number; //unix time in ms
  plan: string; //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
  price: number; userHash: string; // optional transient for HMAC identification
}, arg2: {
  //Account Fields
  id: string; //Required
  name: string; Program: string; // flat custom attributes
}) {
  throw new Error("Function not implemented.");
}

