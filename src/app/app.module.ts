import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { ProyectosDesarrolladorComponent } from './proyectos-desarrollador/proyectos-desarrollador.component';
import { CertificadosDesarrolladorComponent } from './certificados-desarrollador/certificados-desarrollador.component';

@NgModule({
  declarations: [
    AppComponent,
    DesarrolladorComponent,
    ProyectosDesarrolladorComponent,
    CertificadosDesarrolladorComponent
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
