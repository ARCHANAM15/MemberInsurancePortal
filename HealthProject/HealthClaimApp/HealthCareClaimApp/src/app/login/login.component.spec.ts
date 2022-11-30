import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginServiceService } from '../Services/login-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async () => {
    let _router:Router;
    let _service:LoginServiceService;
    let _jwtService:JwtHelperService;
  
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterModule,RouterTestingModule,HttpClientTestingModule],
      declarations: [ LoginComponent ],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();
    _router=TestBed.inject(Router);
    _service=TestBed.inject(LoginServiceService);
    _jwtService=TestBed.inject(JwtHelperService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('login user', () => {
    expect(component).toBeTruthy();
  });
 
});
