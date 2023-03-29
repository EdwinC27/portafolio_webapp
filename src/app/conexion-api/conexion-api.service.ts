import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Project } from '../proyectos-desarrollador/proyectos-desarrollador.model';

@Injectable({
  providedIn: 'root'
})
export class conexionAPI {
  constructor(private http: HttpClient) { }

  public certificados: any;
  public proyectos:any;

  getPeticionCertificados() {
    const url = `http://localhost:3000/certificados`;
    this.proyectos = this.http.get(url);

    return this.proyectos.pipe(
      map((response: any) => {
        this.certificados = response;
      }));
  }

  getPeticionProyectos() {
    const url = `http://localhost:3000/proyectos`;
    this.proyectos = this.http.get(url);
    return this.proyectos.pipe(
      map((response: any) => {
        return response.map((proyecto: Project) => ({
          title: proyecto.title,
          image: proyecto.image,
          description: proyecto.description,
          deployedUrl: proyecto.deployedUrl,
          showDescription: false,
        }));
      })
    );
  }

}
