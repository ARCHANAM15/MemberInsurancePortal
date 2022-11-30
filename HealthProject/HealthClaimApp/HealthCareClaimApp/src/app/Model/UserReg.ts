import { NgForm,FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms";

export class UserReg{
    id:number=0;
    email:any="";
    usertype:string="";
    password:string='';
    conPassword:string=""
    userName:any="";
   public formUserGroup:FormGroup

    constructor(){
        var _builder=new FormBuilder();
        this.formUserGroup=_builder.group({
            userNameControl:new FormControl('',Validators.compose([Validators.required,])),
            passwordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)])),
            usertypeControl:new FormControl('',Validators.compose([Validators.required])),
            emailControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
            conpasswordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)])),
        },{validator: this.checkIfMatchingPasswords('passwordControl', 'conpasswordControl')});
    }
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
          let passwordInput = group.controls[passwordKey],
              passwordConfirmationInput = group.controls[passwordConfirmationKey];
          if (passwordInput.value !== passwordConfirmationInput.value) {
            return passwordConfirmationInput.setErrors({notEquivalent: true})
          }
          else {
              return passwordConfirmationInput.setErrors(null);
          }
        }
      }
    }
    
    
