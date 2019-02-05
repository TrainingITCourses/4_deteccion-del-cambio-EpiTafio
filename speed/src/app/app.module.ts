import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPresenterComponent } from './display-presenter.component';
import { BuscadorContainerComponent } from './buscador-container.component';

@NgModule({
  declarations: [
    AppComponent, DisplayPresenterComponent, BuscadorContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
