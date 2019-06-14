import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getOnlineData(){
    this.http.get('https://randomuser.me/api/?results=10').subscribe(response =>{
      localStorage.setItem('results', response.results);
    });
  }


}
