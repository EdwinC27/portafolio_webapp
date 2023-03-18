import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallesDesarrolladorComponent } from './detalles-desarrollador/detalles-desarrollador.component';
import { ProyectosDesarrolladorComponent } from './proyectos-desarrollador/proyectos-desarrollador.component';

@NgModule({
  declarations: [
    AppComponent,
    DesarrolladoresComponent,
    DetallesDesarrolladorComponent,
    ProyectosDesarrolladorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
