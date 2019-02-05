import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador-container',
   template: `
  <h1>buscador-container</h1>
  <app-display-presenter></app-display-presenter>
  `,
  styles: []
})
export class BuscadorContainerComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
