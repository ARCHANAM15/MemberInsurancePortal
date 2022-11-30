import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MembersearchComponent } from '../membersearch/membersearch.component';
import { memberserachroutes } from '../routing/membersearchroutes';








@NgModule({
  declarations: [
   MembersearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(memberserachroutes),
   
  ],
  providers: [],
  bootstrap: [MembersearchComponent]
})
export class membersearchModule { }
