import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html'
  template: `
  <h1>{{ title }}</h1>
  <app-buscador-container></app-buscador-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Detección del Cambio';
}
