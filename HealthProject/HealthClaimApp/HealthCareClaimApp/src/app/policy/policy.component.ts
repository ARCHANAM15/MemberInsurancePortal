import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { policySubmitData } from '../Model/policyDataSubmit';
import { policyStatusData } from '../Model/policyStatusData';
import { LoginServiceService } from '../Services/login-service.service';
import { PolicyservicesService } from '../Services/policyservices.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policystatuslist:Array<policyStatusData>=new Array<policyStatusData>();
  poicySubmitModel:policySubmitData= new policySubmitData();
  memberid:any;
  policyId:any;
  pid:any;
  PNO:any=0;
  policyaddalert:boolean=false
  policyexistalert:boolean=false;
  public PolicyId:any;
  public cureentuserid:any=0;
  public Lid:any=0;
 errorMsg:any=0;
  constructor(private _router: Router,private route:ActivatedRoute,private _service:PolicyservicesService,private jwt: JwtHelperService,private _auth:LoginServiceService) { }

  ngOnInit(): void {
   this.memberid=this.route.snapshot.paramMap.get("memberId")
   this.policyId=this.route.snapshot.paramMap.get("policyId")
   console.log(Number(atob(this.memberid)))
   this.memberid= Number(atob(this.memberid))
   this.pid= Number(atob(this.policyId))
   console.log(this.pid);
   console.log(this.memberid);
   this.GetPolicyStatus();
   this.cureentuserid=this.jwt.decodeToken(this._auth.getToken()?.toString())?.Id
  this.Lid=this.cureentuserid
  console.log(this.cureentuserid);
  }

  submitPolicy(event:any){
    debugger;
   console.log(this.poicySubmitModel.statusId);
   
    this.poicySubmitModel.email=localStorage.getItem('email')
    
    var _psubmitData={
      PolicyType:this.poicySubmitModel.policyType,
    
      PremiumAmount: Number(this.poicySubmitModel.premiumAmount),
     
      EffectiveDate:this.poicySubmitModel.effectiveDate,
      Remark:this.poicySubmitModel.remark,
      StatusId:Number(this.poicySubmitModel.statusId),
      
      referEmail:this.poicySubmitModel.email,
      MemberId:this.memberid,
      PolicyId:Number(this.pid),
    
      
    };
  this._service.submitPolicy(_psubmitData).subscribe(res=>this.policySubmitSuccess(res),res=>console.log(res));
  this.policyexistalert=true;
  this.policyaddalert=true;
this.poicySubmitModel=new policySubmitData();   

  }

  
 policySubmitSuccess(input:any){
   debugger;
   console.log(input);
   this.poicySubmitModel=input;
   
   console.log(this.poicySubmitModel.policyNumber)
   if(this.poicySubmitModel.errorMsg!=null){
    this.policyaddalert=false
   }
   else{
    this.policyaddalert=true;
   }
   this.PNO=this.poicySubmitModel.policyNumber;
   this.errorMsg=this.poicySubmitModel.errorMsg;
 }
 GetPolicyStatus(){
    
  this._service.GetPolicyStatus().subscribe(res=>this.policyStatusSuccess(res),res=>console.log(res));
}
policyStatusSuccess(input:any){
  console.log(input);
 this.policystatuslist=input;
}

closealert(){
  this.policyaddalert=false
 
}
closeupdatealert(){
  this.policyexistalert=false
}

//btos(){
  //this._router.navigate(['membersearch'])
//}

backToSearch(){
  
  this._router.navigate(["membersearch"]);
}


}
