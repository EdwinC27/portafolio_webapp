import { Component } from '@angular/core';
import { Certificados } from './certificados-desarrollador.model';

@Component({
  selector: 'app-certificados-desarrollador',
  templateUrl: './certificados-desarrollador.component.html',
  styleUrls: ['./certificados-desarrollador.component.css']
})
export class CertificadosDesarrolladorComponent {
  title:string = "Certificados";

  certificates: Certificados[] = [
    {
      name: '36.5 horas de C',
      image: '../../assets/imagenes/cursos/36.5 horas de c.jpg',
      url: '../../assets/pdfCursos/36.5 horas de c.pdf'
    },
    {
      name: '45.5 horas de C++',
      image: '../../assets/imagenes/cursos/45.5  horas de c++.jpg',
      url: '../../assets/pdfCursos/45.5  horas de c++.pdf'
    },
    {
      name: '56 horas de Java',
      image: '../../assets/imagenes/cursos/56 horas java.jpeg',
      url: '../../assets/pdfCursos/56 horas java.pdf'
    },
    {
      name: 'Java básico',
      image: '../../assets/imagenes/cursos/java_basic.jpeg',
      url: '../../assets/pdfCursos/java_basic certificate.pdf'
    },
    {
      name: '21.5 horas de CSS',
      image: '../../assets/imagenes/cursos/21.5 horas CSS.jpg',
      url: '../../assets/pdfCursos/21.5 horas CSS.pdf'
    },
    {
      name: '70.5 horas de JavaScript, HTML y CSS',
      image: '../../assets/imagenes/cursos/70.5 horas javascript, html, css.jpg',
      url: '../../assets/pdfCursos/70.5 horas javascript, html, css.pdf'
    }
  ];
}
