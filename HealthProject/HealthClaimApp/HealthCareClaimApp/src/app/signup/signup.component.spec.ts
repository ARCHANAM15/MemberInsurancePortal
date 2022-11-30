import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServiceService } from '../Services/login-service.service';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    let _router:Router;
    let loginService:LoginServiceService;
    let _jwtService:JwtHelperService;
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports:[HttpClientModule,RouterModule,RouterTestingModule,HttpClientTestingModule],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();
    _router=TestBed.inject(Router);
    loginService=TestBed.inject(LoginServiceService);
    _jwtService=TestBed.inject(JwtHelperService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('register data', async(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.registerUser();
    console.log('register data',result);
    expect(result).toEqual(undefined);
  }));
});
