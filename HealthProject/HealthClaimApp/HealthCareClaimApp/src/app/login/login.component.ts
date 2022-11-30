import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserDataModel } from '../Model/UserDataModel';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType:string ='';

  constructor(private _service:LoginServiceService,private _router: Router) { }
  userDataModel:User=new User();

  ngOnInit(): void {
  }
  
  loginUser(){
     var _userData={
      email:this.userDataModel.email,
      password:this.userDataModel.password,
     };
    console.log(this._service.getToken());
   
      this._service.loginUser(_userData).subscribe(res=>{
        localStorage.setItem('tocken', res.token);
        localStorage.setItem('email',this.userDataModel.email);
       
        if(res.role=="Admin")
        {
          
          this._router.navigate(["membersearch"]);
        }
        if(res.role=="Member")
        {
         
          this._router.navigate(["membersearch"]);
        } 
      }, res => console.log(res));
    

  }
  
  
 

}
