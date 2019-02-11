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
    console.log('searchText: ' + searchText);
    const search = searchText.toLowerCase();
    this.cuenta = 0;
    console.log('sext: ' + this.mensaje.contenido);
   // console.log(JSON.stringify(lanzamientosJS));

   for (let i = 0; i < lanzamientosJS.launches.length; i++ ) {
    if ( lanzamientosJS.launches[i].name.toLowerCase().includes(search)) {
    this.cuenta ++;

    console.log(lanzamientosJS.launches[i].name);
    // this.lanzamientos.push(lanzamientosJS.launches[i].name);
 // this.datos.push(lanzamientosJS.launches[i].name);
   // this.lanzamientos = {...this.lanzamientos};

        }
    }
   this.mensaje.contenido = this.cuenta;
    this.mensaje = { ...this.mensaje};
    }

  }
