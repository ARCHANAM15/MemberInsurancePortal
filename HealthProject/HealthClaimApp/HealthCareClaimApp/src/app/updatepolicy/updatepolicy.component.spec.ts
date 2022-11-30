import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { updatepolicyroutes } from '../routing/updatepolicyroutes';
import { PolicyservicesService } from '../Services/policyservices.service';
import { UpdatepolicyComponent } from './updatepolicy.component';



describe('UpdatepolicyComponent', () => {
  let component: UpdatepolicyComponent;
  let fixture: ComponentFixture<UpdatepolicyComponent>;

  beforeEach(async () => {
    let _router:Router;
    let _poliyService:PolicyservicesService;
    await TestBed.configureTestingModule({
      declarations: [ UpdatepolicyComponent ],
      imports:[HttpClientModule,RouterModule,RouterTestingModule,HttpClientTestingModule],
     
    })
    .compileComponents();
    _router=TestBed.inject(Router);
    _poliyService=TestBed.inject(PolicyservicesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });
  it('policy component update policy', () => {
    fixture = TestBed.createComponent(UpdatepolicyComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.updatePolicy();
    console.log('add policy',result);
    expect(result).toEqual(undefined);
  });
});
