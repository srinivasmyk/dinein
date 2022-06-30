import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { nullSafeIsEquivalent } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";


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
  p:string="";
user=new BehaviorSubject<User>(null);

  constructor(private http:HttpClient){}

  signup(email:string,password:string){
return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGRgDUydp3d2-i0xee8FudcCaS6-ErOUk',{
  email: email,
  password:password,
  returnSecureToken:true
}).pipe(catchError(this.handleError),tap(resData =>{
this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
}));
  }

  login(email:string,password:string){
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGRgDUydp3d2-i0xee8FudcCaS6-ErOUk',{
      email: email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(this.handleError),tap(resData =>{
      this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
      }));
  }

  private handleError(errorRes:HttpErrorResponse){
    let errorMessage="Unknown error occured!!!!!";
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }else{

    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage="The email address is already in use by another account.";
        break;
        case 'EMAIL_NOT_FOUND':
          errorMessage="There is no user record corresponding to this identifier."
          break;
          case 'INVALID_PASSWORD':
            errorMessage="The password is invalid or the user does not have a password."
            break;
    }}
  return throwError(errorMessage);
  }

  private handleAuthentication(email:string,userId:string,token:string,expiresIn:number){
    const expirationDate=new Date(new Date().getTime()+ expiresIn*1000);
    const user = new User(email,userId,expirationDate,token);
    this.user.next(user);


  }
}
