import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { memberRegister } from '../Model/MemberRegister';
import { MemberserviceService } from '../Services/memberservice.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MemberregistrationComponent } from './memberregistration.component';

describe('MemberregistrationComponent', () => {
  let component: MemberregistrationComponent;
  let fixture: ComponentFixture<MemberregistrationComponent>;

  beforeEach(async () => {
    let router:Router;
    let memberservice:MemberserviceService;
    await TestBed.configureTestingModule({
      declarations: [ MemberregistrationComponent ],
      imports:[ HttpClientTestingModule,HttpClientModule,RouterModule,RouterTestingModule],
      
    })
    .compileComponents();
    router=TestBed.inject(Router);
    memberservice=TestBed.inject(MemberserviceService)

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register data', async(() => {
    fixture = TestBed.createComponent(MemberregistrationComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.Addmember(event);
    console.log('register data',result);
    expect(result).toEqual(undefined);
  }));
});
