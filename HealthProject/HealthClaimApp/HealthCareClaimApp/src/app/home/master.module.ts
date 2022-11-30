import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

import { MasterComponent } from '../master/master.component';
import { MemberregistrationComponent } from '../memberregistration/memberregistration.component';
import { MembersearchComponent } from '../membersearch/membersearch.component';
import { Mainroutes } from '../routing/mainrotes';

import { LoginServiceService } from '../Services/login-service.service';
import { SignupComponent } from '../signup/signup.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HomeComponent } from './home.component';
import { PolicyComponent } from '../policy/policy.component';
import { UpdatepolicyComponent } from '../updatepolicy/updatepolicy.component';




@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MembersearchComponent,
    MemberregistrationComponent,
    PolicyComponent,
    UpdatepolicyComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Mainroutes)
   
  ],
  providers: [LoginServiceService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
  bootstrap: [MasterComponent]
})
export class masterModule { }
