import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'list',
        component:ProductListComponent
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
export class ProductsRoutingModule { }
