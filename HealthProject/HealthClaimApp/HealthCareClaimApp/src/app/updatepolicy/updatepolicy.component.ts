import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { policySubmitData } from '../Model/policyDataSubmit';
import { policyStatusData } from '../Model/policyStatusData';
import { updatepolicy } from '../Model/updatepolicy';
import { PolicyservicesService } from '../Services/policyservices.service';

@Component({
  selector: 'app-updatepolicy',
  templateUrl: './updatepolicy.component.html',
  styleUrls: ['./updatepolicy.component.css']
})
export class UpdatepolicyComponent implements OnInit {
  memberid:any;
  policyId:any;
  policystatuslist:Array<policyStatusData>=new Array<policyStatusData>();
 // poicyupdateModel:updatepolicy= new updatepolicy();
  //policyupdateData:Array<updatepolicy>=new Array<updatepolicy>();
  poicyupdateModel:policySubmitData= new policySubmitData();
  policyupdateData:Array<policySubmitData>=new Array<policySubmitData>();
  alert:boolean=false;
  pid:any;
  mid:any;
  public constoffset:any=""
  constructor(private _router: Router,private route:ActivatedRoute,private _service:PolicyservicesService) { }

  ngOnInit(): void {
    this.memberid=this.route.snapshot.paramMap.get("memberId")
    this.policyId=this.route.snapshot.paramMap.get("policyId")
    console.log(Number(atob(this.memberid)))
    console.log(Number(atob(this.policyId)))
    this.mid= Number(atob(this.memberid))
   this.pid= Number(atob(this.policyId))
   this.getPolicyDeatilsbyID(this.pid);
   this.GetPolicyStatus();

  }

  updatePolicy(){
    debugger;
   var  _updateData={
    PolicyType:this.poicyupdateModel.policyType,
    PremiumAmount: Number(this.poicyupdateModel.premiumAmount),
    EffectiveDate:this.poicyupdateModel.effectiveDate,
    Remark:this.poicyupdateModel.remark,
    StatusId:Number(this.poicyupdateModel.statusId),
    referEmail:this.poicyupdateModel.email,
    MemberId:this.mid,
    PolicyId:this.pid

    }
    this._service.updatePolicy(_updateData).subscribe(res=>this.policySubmitSuccess(res),res=>console.log(res));
    this.alert=true
    this.poicyupdateModel=new policySubmitData();  
  }

  policySubmitSuccess(input:any){
    console.log(input)
    this.poicyupdateModel=input;
  }

  //policy status
  GetPolicyStatus(){
    
    this._service.GetPolicyStatus().subscribe(res=>this.policyStatusSuccess(res),res=>console.log(res));
    
  }
  policyStatusSuccess(input:any){
    console.log(input);
   this.policystatuslist=input;
  }
  
  closealert(){
    this.alert=false
  }
  getPolicyDeatilsbyID(input:any){
    debugger;
 this._service.getPolicyDeatilsbyID(input).subscribe(res=>this.getSucess(res),res=>console.log(res));
  }
  getSucess(input:any){
  debugger;
    this.poicyupdateModel=input;
    
    //console.log(this.poicyupdateModel.effectiveDate.toString);
    this.poicyupdateModel.effectiveDate =this.Convertdateformat(new Date(this.poicyupdateModel.effectiveDate))
    console.log(this.poicyupdateModel);
  }
  backToSearch(){
  
    this._router.navigate(["membersearch"]);
  }
  
  Convertdateformat(date :Date) :string{

    const offset =date.getTimezoneOffset()

    date= new Date(date.getTime()- (offset*60*1000))

    return date.toISOString().split('T')[0]

  }
  
}
