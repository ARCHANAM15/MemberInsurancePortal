import { NgForm,FormGroup,Validator,FormBuilder,FormControl, Validators } from "@angular/forms";
export class policySubmitData{
   
    policyId:number=0;
    premiumAmount:number=0;   
    effectiveDate:string="";
    policyType:string="";
    statusDescription:string=""
    remark:string=""
    policyNumber:number=0;
    email:any;
    statusId:number=0;
    errorMsg:any="";
   formPolicyGroup: FormGroup;
   constructor(){
    var _builder=new FormBuilder();
    this.formPolicyGroup=_builder.group({
        premiumAmountControl:new FormControl('',Validators.compose([Validators.required,])),
    })
   }
}