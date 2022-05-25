import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes=[
   {
    path:'',
    component:HomeComponent
  },
  {
    path:'sales',
    loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) 
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) 
  },
  {
    path:'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    component:ErrorPageComponent
  },
]

@NgModule({  
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
