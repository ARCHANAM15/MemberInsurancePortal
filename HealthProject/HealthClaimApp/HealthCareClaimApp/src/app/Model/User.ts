import { NgForm,FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms";

export class User{
    id:number=0;
    userName:any="";
    password:string='';
    email:any="";
    usertype:string="";
    conPassword:string=""

   public formUserGroup:FormGroup

    constructor(){
        var _builder=new FormBuilder();
        this.formUserGroup=_builder.group({
            //userNameControl:new FormControl('',Validators.compose([Validators.required,])),
            passwordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)])),
            emailControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
           
            
        });
    }
    
}