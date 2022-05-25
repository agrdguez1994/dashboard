import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'list',
        component:UserListComponent
      },      
      {
        path:'**',
        redirectTo:'/404'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class UsersRoutingModule { }
