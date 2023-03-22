import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';

const routes: Routes = [
  {
    path : "",
    component : DesarrolladorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
