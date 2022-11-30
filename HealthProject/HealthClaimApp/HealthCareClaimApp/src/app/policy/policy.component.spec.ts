import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServiceService } from '../Services/login-service.service';
import { PolicyservicesService } from '../Services/policyservices.service';

import { PolicyComponent } from './policy.component';

describe('PolicyComponent', () => {
  let component: PolicyComponent;
  let fixture: ComponentFixture<PolicyComponent>;

  beforeEach(async () => {
    let _router:Router;
    let _poliyService:PolicyservicesService;
    let _loginservice:LoginServiceService;
    let _jwtService:JwtHelperService;

    await TestBed.configureTestingModule({
      declarations: [ PolicyComponent ],
      imports:[HttpClientModule,RouterModule,RouterTestingModule,HttpClientTestingModule],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();
    _router=TestBed.inject(Router);
    _poliyService=TestBed.inject(PolicyservicesService);
    _loginservice=TestBed.inject(LoginServiceService);
    _jwtService=TestBed.inject(JwtHelperService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
 
});
