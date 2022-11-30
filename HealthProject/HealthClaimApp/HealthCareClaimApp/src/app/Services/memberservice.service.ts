import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberserviceService {
_addMember="https://localhost:44347/api/gateway/Member/add-member";
_getPolicyStatus="https://localhost:44347/api/gateway/Member/GetAllPolicyStatus";
_getSearchMember="https://localhost:44347/api/gateway/Member/Search";
_getAllMember="https://localhost:44347/api/gateway/Member/getAllMember";
_userDataUrl="https://localhost:44347/api/gateway/login/user-data";


  constructor(private http:HttpClient,private _router:Router) { }

  Addmember(member:any){
    return this.http.post<any>(this._addMember,member);
  }
  GetPolicyStatus(){
    return this.http.get(this._getPolicyStatus)
  }

  searchMember(input:any){
    return this.http.post<any>(this._getSearchMember,input)
  }
  allMember(){
    return this.http.get<any>(this._getAllMember)
  }
  userData(login :any){
    return this.http.post<any>(this._userDataUrl,login);
  }

}
