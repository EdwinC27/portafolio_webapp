import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladoresComponent } from './desarrolladores/desarrolladores.component';
import { DetallesDesarrolladorComponent } from './detalles-desarrollador/detalles-desarrollador.component';

const routes: Routes = [
  {
    path : "",
    component : DesarrolladoresComponent
  },
  {
    path : "user",
    component : DetallesDesarrolladorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
