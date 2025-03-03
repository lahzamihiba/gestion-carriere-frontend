import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyFirstCompComponent} from './my-first-comp/my-first-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    DashboardComponent,
    MyFirstCompComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Application de gestion-carriere';

}
