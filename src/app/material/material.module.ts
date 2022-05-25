import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table'; 
import { FlexLayoutModule } from '@angular/flex-layout';
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
 import {MatTreeModule} from '@angular/material/tree'; 
@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    
    FlexLayoutModule,
    
  ],
  declarations: [],
  imports: [ ]
})
export class MaterialModule { }
