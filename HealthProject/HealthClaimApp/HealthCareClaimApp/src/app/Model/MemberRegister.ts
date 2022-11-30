import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class memberRegister{
    id:number=0;
    firstName:string="";
    lastName:string="";
    address:string="";
    DOB:string="";
    state:string="";
    email:string="";
    membershipid:number=0;

    policyId:number=0;
    premiumAmout:number=0;
    submittedDate:string="";
    policyType:string="";
    statusDescription:string=""
    isPolicy:boolean=false;

    public formmemberGroup:FormGroup

    constructor(){
        var _builder=new FormBuilder();
        this.formmemberGroup=_builder.group({
            firstNameControl:new FormControl('',Validators.compose([Validators.required,])),
            lastNameControl:new FormControl('',Validators.compose([Validators.required,])),
            addressControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(100)])),
            stateControl:new FormControl('',Validators.compose([Validators.required,])),
            DOBControl:new FormControl('',Validators.compose([Validators.required,])),
            emailControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
        });
    }

}