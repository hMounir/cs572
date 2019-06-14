import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService:UserService,private users:User[]) { }

  ngOnInit() {
    this.userService.getCachedData().subscribe((users:User[])=>{

    })
  }

}
