
import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <ul class="nav navbar-nav">
    <li><a [routerLink]="['/welcome']">Home</a></li>
    <li><a [routerLink]="['/products']">Product List</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}