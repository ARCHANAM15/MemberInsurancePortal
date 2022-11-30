import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { MemberregistrationComponent } from "../memberregistration/memberregistration.component";
import { MembersearchComponent } from "../membersearch/membersearch.component";
import { PolicyComponent } from "../policy/policy.component";
import { SignupComponent } from "../signup/signup.component";
import { UpdatepolicyComponent } from "../updatepolicy/updatepolicy.component";


export const Mainroutes=[
    
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'membersearch',component:MembersearchComponent},
    { path: 'memberRegister', component: MemberregistrationComponent },
    {path:'policy/:memberId/:policyId',component:PolicyComponent},
    {path:'updatepolicy/:memberId/:policyId',component:UpdatepolicyComponent}

   
]