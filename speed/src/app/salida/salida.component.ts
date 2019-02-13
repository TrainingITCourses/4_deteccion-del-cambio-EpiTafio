import { Component, OnInit } from '@angular/core';
import lanzamientosJS from '../../assets/data/launches.json';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  public lanzamientos: any[];
  public mensaje  = { contenido: 0 };
  public cuenta = 0;
  constructor() {}

  ngOnInit() {
  }

  onSearch  (searchText: any)  {
    this.lanzamientos = [];
    this.filtra(searchText);
  }

  filtra (searchText: any) {
    console.log('searchText: ' + searchText);
    const search = searchText.toLowerCase();
    this.cuenta = 0;
    for (let i = 0; i < lanzamientosJS.launches.length; i++ ) {
      if ( lanzamientosJS.launches[i].name.toLowerCase().includes(search)) {
        this.cuenta ++;
        this.lanzamientos.push('Lanzamiento: ' +  lanzamientosJS.launches[i].name);
      }
    }
  this.mensaje.contenido = this.cuenta;
  }
}
