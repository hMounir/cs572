import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
