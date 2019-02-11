import { ChangeDetectionStrategy, Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import lanzamientosJS from '../../assets/data/launches.json';

@Component({
 // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  public lanzamientos: any[];
  private datos: any[];
  public lanzamientosFiltrados: any[] = [];
  public mensaje  = { contenido: 0 };
  public cuenta = 0;
  constructor() {}

  ngOnInit() {
  }

  onSearch  (searchText: any)  {
    this.lanzamientos = [];
    this.datos = [];
    console.log('searchText: ' + searchText);
    const search = searchText.toLowerCase();
    this.cuenta = 0;

   for (let i = 0; i < lanzamientosJS.launches.length; i++ ) {
    if ( lanzamientosJS.launches[i].name.toLowerCase().includes(search)) {
    this.cuenta ++;
    this.cargaLinea (lanzamientosJS.launches[i]) ;
      }
    }
  this.mensaje.contenido = this.cuenta;
  }
  cargaLinea (linea: any) {

    // console.log('CargaLinea()' + linea.name);
     this.lanzamientos.push('Lanzamiento: ' + linea.name);
  }
}
