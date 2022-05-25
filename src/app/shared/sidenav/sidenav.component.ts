import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, HostListener, OnInit} from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MatTreeNestedDataSource } from '@angular/material/tree';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  
  public getScreenWidth: any;
  public fxValue: boolean=true;
  public sidemode: MatDrawerMode='side';
  public openedValue:boolean=true;

  constructor() {  }
  
  
  ngOnInit(): void { 
    this.setOpenedValue();
  }

  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.setOpenedValue();
  }
  private setOpenedValue(){
    this.getScreenWidth = window.innerWidth;
    
    if(this.getScreenWidth < 600){
      this.openedValue=false;
    }
  }
  public setFxValue(){
    if(this.getScreenWidth < 600){
      this.fxValue=false;
      this.sidemode='over';
    }else if(!this.fxValue){
      this.fxValue=true;
      this.sidemode='side';
    }   

  }
}
