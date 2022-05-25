import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleNav = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  emit() {
    this.toggleNav.emit(true);
  }
}
