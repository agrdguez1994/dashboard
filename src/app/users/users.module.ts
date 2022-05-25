import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '../material/material.module';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UserListComponent
  ],
  exports:[
    UserListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ],
 
})
export class UsersModule { }
