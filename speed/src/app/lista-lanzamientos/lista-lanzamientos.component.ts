import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lista-lanzamientos',
  templateUrl: './lista-lanzamientos.component.html',
  styleUrls: ['./lista-lanzamientos.component.css']
})
export class ListaLanzamientosComponent implements OnInit {
  @Input() public mensaje = { contenido: 0 };
  @Input() public lanzamientos: any[];
  constructor() {
  }

  ngOnInit() {
  }


}
