import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';
import { DetallesDesarrolladorComponent } from './detalles-desarrollador/detalles-desarrollador.component';
import { ProyectosDesarrolladorComponent } from './proyectos-desarrollador/proyectos-desarrollador.component';

const routes: Routes = [
  {
    path : "",
    component : DesarrolladoresComponent
  },
  {
    path : "user",
    component : DetallesDesarrolladorComponent
  },
  {
    path  : "user/projects",
    component : ProyectosDesarrolladorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
