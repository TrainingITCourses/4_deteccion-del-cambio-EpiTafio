import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
 @Output() public search = new EventEmitter<string>();
 @Output() public filtratipo = new EventEmitter<string>();
 filtro;
  constructor() {}

  ngOnInit() {
  }

 public hayTexto (texto: any)  {
    console.log(texto.toLowerCase());
    this.search.next(texto.toLowerCase());
  }

}
