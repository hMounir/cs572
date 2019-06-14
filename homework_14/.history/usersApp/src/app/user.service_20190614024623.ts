import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { ResponseData } from './results';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getOnlineData(){
    this.http.get('https://randomuser.me/api/?results=10').subscribe((res:ResponseData) =>{
      localStorage.setItem('users',JSON.stringify(res.results));
    });
  }


}
