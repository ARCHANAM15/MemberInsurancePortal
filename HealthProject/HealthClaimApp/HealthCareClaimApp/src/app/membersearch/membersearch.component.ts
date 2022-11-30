import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { memberRegister } from '../Model/MemberRegister';
import { policyStatusData } from '../Model/policyStatusData';
import { searchData } from '../Model/searchData';
import { UserDataModel } from '../Model/UserDataModel';
import { PolicyComponent } from '../policy/policy.component';
import { LoginServiceService } from '../Services/login-service.service';
import { MemberserviceService } from '../Services/memberservice.service';

@Component({
  selector: 'app-membersearch',
  templateUrl: './membersearch.component.html',
  styleUrls: ['./membersearch.component.css']
})
export class MembersearchComponent implements OnInit {
searchDataModel:searchData=new searchData();
memberDataList:Array<memberRegister>=new Array<memberRegister>();
memberData:memberRegister=new memberRegister();
UserModel:UserDataModel=new UserDataModel();

policystatuslist:Array<policyStatusData>=new Array<policyStatusData>();


public userType:any="";
public role:any=""
public cureentuserid:any="";
selectedRow:any=""
isMember=false;
display = "none";
public Currentrole:any="Member"
public usertype:any="Admin"
FN=this.searchDataModel.firstName;
LN=this.searchDataModel.lastName;
firstN:any="";
lastN:any="";

mid:any=0;

  constructor(private _router:Router,private _memberService:MemberserviceService,private _auth:LoginServiceService,private jwt: JwtHelperService) { }
public memberId:any=0;
public idmember:any=0;
public policyId:any=0;
public pID:any=0;
public loginmember:any=0;
public loginmemberid:any=0;
  ngOnInit(): void {
  this._auth.getUserRole();
  this._auth.getUserId();
  this.role=this.userData();
  this.Currentrole=this._auth.getUserRole();
  this.userType=this._auth.getUserRole();
  this.GetPolicyStatus();
  this.cureentuserid=this.jwt.decodeToken(this._auth.getToken()?.toString())?.Id
   
 
 console.log(this.role)
 console.log(this._auth.getUserRole());
 
 console.log(this._auth.getUserId());
 this.loginmember=this._auth.getUserId();
 console.log(this.loginmember);
  }
  
  GetPolicyStatus(){
    
    this._memberService.GetPolicyStatus().subscribe(res=>this.policyStatusSuccess(res),res=>console.log(res));
  }
  policyStatusSuccess(input:any){
    console.log(input);
   this.policystatuslist=input;
  }

  searchMember(){
    
    var _userDto={
      FirstName:this.searchDataModel.firstName,
      LastName:this.searchDataModel.lastName,
      Id:Number(this.searchDataModel.memberId),
      PolicyId:Number(this.searchDataModel.PolicyId),
      StatusDescription:this.searchDataModel.statusDescription,
      premiumAmout:0
    };
    this._memberService.searchMember(_userDto).subscribe(res=>this.searchSuccess(res),res=>console.log(res));
  }
  searchSuccess(input:any){
    debugger;
    console.log(input);
    this.memberDataList=input;
    this.mid=this.memberDataList[0].id;
    console.log(this.memberDataList[0].firstName);
   this.firstN=this.memberDataList[0].firstName

  }
  

  allMember(){
    this._memberService.allMember().subscribe(res=>this.allmemberSuccess(res),res=>console.log(res))
  }
  allmemberSuccess(input:any){
    console.log(input);
    this.memberDataList=input;
    console.log("data",this.memberDataList);
  }
  userData(){
    var email=localStorage.getItem('email');
    var user_Data={
      Email:email,
      UserName:'',
      UserType:''
    };

    this._memberService.userData(user_Data).subscribe(res=>this.userSucess(res),res => console.log(res));
    
    
  }
  userSucess(data:any){
    console.log("model dta",data);
this.UserModel=data;
console.log("data data",this.UserModel);
localStorage.setItem('userName',data.userName);
localStorage.setItem('userType',data.userType);
  }
 //Select member and add policy
 AddPolicy(){
  if (this.memberId>0 && this.policyId==0){
    console.log( "member id",this.memberId)
    this._router.navigate( ['/policy',btoa(this.memberId),btoa(this.policyId)])
  }
  else{
    alert("Please select a member to add to the policy");
  }
    
  
  
 
  }

 
  checkMemberValue(id:any,pId:any)
  {
    debugger;
    this.memberId=id;
    this.policyId=0
    console.log("memberId,policyid",id,pId);
  }

 
  //Select policy and member ,update policy
  checkboxValue(pId:any,id:any){
    debugger;
    console.log(pId)
    this.policyId=pId;
    this.memberId=id
    console.log("id",pId,this.memberId);
  }
  updatePolicy(){
    debugger;
    this.policyId;
    this.memberId
    console.log("policyId,id",this.policyId,this.memberId)
    this._router.navigate( ['/updatepolicy',btoa(this.memberId),btoa(this.policyId)])
    }
    ///Add policy by member

    AddPolicyByMember(){
      debugger;
     //this.loginmemberid=this.loginmember[0];
     //this.firstN=this.UserModel.userName;
     if(this.firstN!=localStorage.getItem('userName')){
      debugger;
      alert("Policy additions against other users are not allowed!")
    }
    else{
      this.loginmemberid=this.mid;
      this.policyId=0;
      console.log("id",this.loginmemberid)
      this._router.navigate( ['/policy',btoa(this.loginmemberid),btoa(this.policyId)])
    }
     
    }
    
}
