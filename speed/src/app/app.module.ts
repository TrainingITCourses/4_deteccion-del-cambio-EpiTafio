import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalidaComponent } from './salida/salida.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListaLanzamientosComponent } from './lista-lanzamientos/lista-lanzamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    SalidaComponent,
    BuscadorComponent,
    ListaLanzamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
