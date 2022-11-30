import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PolicyservicesService {
  _policySubmit="https://localhost:44347/api/gateway/PolicySubmission/submit-policy";
  _getPolicyStatus="https://localhost:44347/api/gateway/PolicySubmission/GetPolicyStatus";
  _policyUpdate="https://localhost:44347/api/gateway/policySubmission/update-policy";
  _getMemberPolicyDtsById="https://localhost:44347/api/gateway/policySubmission/getMemberPolicyDtsById?policyId=";
  
  constructor(private http:HttpClient,private _router:Router) { }

  submitPolicy(input:any){
    return this.http.post<any>(this._policySubmit,input)
  }
  GetPolicyStatus(){
    return this.http.get(this._getPolicyStatus)
  }
  updatePolicy(input:any){
    return this.http.put<any>(this._policyUpdate,input)
  }
  getPolicyDeatilsbyID(input:any){
    return this.http.get<any>(this._getMemberPolicyDtsById+input)
  }
  
}
