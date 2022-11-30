import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

import { MasterComponent } from '../master/master.component';
import { MembersearchComponent } from '../membersearch/membersearch.component';
import { Mainroutes } from '../routing/mainrotes';
import { memberregroutes } from '../routing/memberregroutes';

import { LoginServiceService } from '../Services/login-service.service';

import { MemberregistrationComponent } from './memberregistration.component';




@NgModule({
  declarations: [
 MemberregistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(memberregroutes),
  ],
  providers: [],
  bootstrap: [MemberregistrationComponent]
})
export class memberregModule { }
