import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserReg } from '../Model/UserReg';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router: Router) { }
  userDataModel:UserReg=new UserReg();
  
  firpwod=this.userDataModel.password;
  confirmpwd=this.userDataModel.conPassword;
  isEmailFlag=false
  isEmailValid=false;
  
  ngOnInit(): void {
  }

 
  registerUser(){
    debugger;
    var registerData={
      userName:this.userDataModel.userName,
      password:this.userDataModel.password,
      userType:this.userDataModel.usertype,
      email:this.userDataModel.email
    };

    this._service.registerUser(registerData).subscribe(res=>this.registerationSucess(res),res => console.log(res));
    
    

  }
  registerationSucess(data:any){
    debugger;
    console.log(data);
    if(data.token!="already"){
      localStorage.setItem('tocken', data.token);
      
      if(data.role=="Admin")
       {
        this._router.navigate(['']);
       }
      if(data.role=="Member")
       {
       this._router.navigate(['memberRegister']);
      } 
    }else{
      this.isEmailValid=true;
    }
  }
  emailValidation(){
    this.isEmailValid=false;
  }
 
}
