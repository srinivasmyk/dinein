import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";


export interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;
}


@Injectable({providedIn:'root'})
export class AuthService{

  constructor(private http:HttpClient){}

  signup(email:string,password:string){
return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGRgDUydp3d2-i0xee8FudcCaS6-ErOUk',{
  email: email,
  password:password,
  returnSecureToken:true
}).pipe(catchError(errorRes => {
  let errorMessage="Unknown error occured!!!!!";
  if(!errorRes.error || !errorRes.error.error){
    return throwError(errorMessage);
  }else{

  switch(errorRes.error.error.message){
    case 'EMAIL_EXISTS':
      errorMessage="The email address is already in use by another account.";
  }}
return throwError(errorMessage);
}));
  }

  login(email:string,password:string){
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGRgDUydp3d2-i0xee8FudcCaS6-ErOUk',{
      email: email,
      password:password,
      returnSecureToken:true
    })
  }
}