import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  _loginUrl="https://localhost:44347/api/gateway/Login/login-user";
  _registerUrl="https://localhost:44347/api/gateway/Login/register-user";
 
  public role ='';
  public routeId='';
 



  //_loginUrl="https://localhost:44334/api/Login/login-user"
  //_registerUrl="https://localhost:44334/api/Login/register-user"
  constructor(private http:HttpClient,private _router:Router,private jwt: JwtHelperService) { }

  loginUser(login :any){
    return this.http.post<any>(this._loginUrl,login);
  }
  registerUser(login:any){
    return this.http.post<any>(this._registerUrl,login);
  }

  getToken(){
    return localStorage.getItem('tocken');
  }
 

  logoutUser(){
    debugger;
    localStorage.removeItem('tocken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    localStorage.removeItem('email')
     this._router.navigate(['']);
  }
  logginIn(){
    return !!localStorage.getItem('tocken');
  }
  getUserRole(){
    this.role=this.jwt.decodeToken(this.getToken()?.toString()).role;  
    return this.role;
  }
  getUserId(){
    this.routeId =this.jwt.decodeToken(this.getToken()?.toString()).unique_name
    return this.routeId;
  }
 

}

