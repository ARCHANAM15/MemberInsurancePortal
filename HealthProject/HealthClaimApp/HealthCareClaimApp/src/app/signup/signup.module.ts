import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { signuproutes } from '../routing/signuproutes';

import { SignupComponent } from './signup.component';





@NgModule({
  declarations: [
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(signuproutes),
   
   
  ],
  providers: [],
  bootstrap: [SignupComponent]
})
export class signupModule { }
