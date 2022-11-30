import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataModel } from '../Model/UserDataModel';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './master.component.html',
 
})
export class MasterComponent implements OnInit  {

  constructor(private _auth:LoginServiceService,private jwt: JwtHelperService) { }
  UserModel:UserDataModel=new UserDataModel();
 
  title = 'HealthCareClaimApp';
 
  public role="";
  public cureentuserid="";
  public userName="";
  public userdataName:any="";
  public userType:any="";
  ngOnInit(): void {
  // this.userName=this.jwt.decodeToken(this._auth.getToken()?.toString()).Name;
   //this.role=this.jwt.decodeToken(this._auth.getToken()?.toString()).Role;
   //this.cureentuserid=this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
   
  }

  
  LoggedIn(Input:boolean):boolean{
    if(Input){
      console.log(this.cureentuserid);
      return this._auth.logginIn();
    }
    else{
      return !this._auth.logginIn();
    }
  }
  Logout(){
    this._auth.logoutUser();
    
  }
  userMasterData(){
    debugger;
   this.userdataName = localStorage.getItem('userName');
this.userType = localStorage.getItem('userType');
  }
  
 

  

}



