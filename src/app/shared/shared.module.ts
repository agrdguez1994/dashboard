import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ErrorPageComponent } from './error-page/error-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ErrorPageComponent,
    ToolbarComponent,
    HomeComponent,
  ],
  exports:[
    SidenavComponent,
    ErrorPageComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
