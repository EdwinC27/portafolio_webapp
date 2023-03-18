import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';
import { DetalleProyectoDesarrolladorComponent } from './detalle-proyecto-desarrollador/detalle-proyecto-desarrollador.component';
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
  },
  {
    path  : "user/projects/project",
    component : DetalleProyectoDesarrolladorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
