import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { memberRegister } from '../Model/MemberRegister';
import { LoginServiceService } from '../Services/login-service.service';
import { MemberserviceService } from '../Services/memberservice.service';

@Component({
  selector: 'app-memberregistration',
  templateUrl: './memberregistration.component.html',
  styleUrls: ['./memberregistration.component.css']
})
export class MemberregistrationComponent implements OnInit {

  constructor(private _memberService:MemberserviceService,private _router: Router) { }

  ngOnInit(): void {
  }
 memberRegModel:memberRegister = new memberRegister();
 memberRegModels:Array<memberRegister>= new Array<memberRegister>();
 alert:boolean=false
 
 Addmember(event:any){
   debugger;
   var _memberData={
    firstName:this.memberRegModel.firstName,
    lastName:this.memberRegModel.lastName,
    address:this.memberRegModel.address,
    state:this.memberRegModel.state,
    dateOfBirth:this.memberRegModel.DOB,
    email:this.memberRegModel.email,

   };
   this._memberService.Addmember(_memberData).subscribe(res=>this.Success(res),res=>console.log(res))
  
   this.memberRegModel= new memberRegister();
    this.alert=true
 }

 Success(input:any){
  console.log(input)
 this.memberRegModels=input;
}

closealert(){
  this.alert=false
}
}