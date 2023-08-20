import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
  export class NavbarComponent {
    menuToggle: any = true;

    constructor() {}

    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
    }
    openMenu() {
      this.menuToggle = true;
      console.log('open');
    }

    menuClose(){
      this.menuToggle = false;
       console.log('close');
    }
  }

