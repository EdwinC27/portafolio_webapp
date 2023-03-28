import { Component, OnInit } from '@angular/core';
import { conexionAPI } from '../conexion-api/conexion-api.service';
import { Project } from './proyectos-desarrollador.model';

@Component({
  selector: 'app-proyectos-desarrollador',
  templateUrl: './proyectos-desarrollador.component.html',
  styleUrls: ['./proyectos-desarrollador.component.css']
})
export class ProyectosDesarrolladorComponent implements OnInit {

  toggleDescription(project: Project) {
    project.showDescription = !project.showDescription;
  }

  constructor(private conexionApi:conexionAPI) {}
  proyecto:any;

  ngOnInit () {
    this.conexionApi.getPeticionProyectos().subscribe(
      () => {
        this.proyecto = this.conexionApi.proyectos;
      }
    );
  }
}
