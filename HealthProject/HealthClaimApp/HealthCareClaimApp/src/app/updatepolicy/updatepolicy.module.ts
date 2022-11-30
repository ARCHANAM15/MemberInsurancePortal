import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { policyroutes } from '../routing/policyroutes';
import { updatepolicyroutes } from '../routing/updatepolicyroutes';


import { UpdatepolicyComponent } from './updatepolicy.component';








@NgModule({
  declarations: [
   UpdatepolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(updatepolicyroutes)
   
  ],
  providers: [],
  bootstrap: [UpdatepolicyComponent]
})
export class updatePolicyModule { }
