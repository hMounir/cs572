import { Component } from '@angular/core';
import { UserService } from './user.service';
import { ResponseData } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usersApp';

  constructor(public userService:UserService) { 
    this.userService.getOnlineData().subscribe((res:ResponseData) =>{
      localStorage.setItem('users',JSON.stringify(res.results));
    });
  }
}
