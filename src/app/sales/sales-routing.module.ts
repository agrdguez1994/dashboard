import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'list',
        component:SalesListComponent
      },      
      {
        path:'**',
        redirectTo:'404'
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
export class SalesRoutingModule { }
