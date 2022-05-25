import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesListComponent } from './sales-list/sales-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [    
    SalesListComponent
  ],
  exports:[
    SalesListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    SalesRoutingModule
    
  ],
  
})
export class SalesModule { }
