import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { policyroutes } from '../routing/policyroutes';

import { PolicyComponent } from './policy.component';








@NgModule({
  declarations: [
   PolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(policyroutes)
   
  ],
  providers: [],
  bootstrap: [PolicyComponent]
})
export class policyModule { }
