import { Component } from '@angular/core';
import { conexionAPI } from '../conexion-api/conexion-api.service';
import { Certificados } from './certificados-desarrollador.model';

@Component({
  selector: 'app-certificados-desarrollador',
  templateUrl: './certificados-desarrollador.component.html',
  styleUrls: ['./certificados-desarrollador.component.css']
})
export class CertificadosDesarrolladorComponent {

  constructor(private conexionApi:conexionAPI) {}
  certificates: Certificados[] = [];

  ngOnInit () {
    this.conexionApi.getPeticionCertificados().subscribe(
      (certificados: Certificados[]) => {
        this.certificates = certificados;
      }
    );
  }
}
