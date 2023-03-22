import { Component } from '@angular/core';
import { Certificados, Project } from './desarrollador.model';

@Component({
  selector: 'app-desarrollador',
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css']
})
export class DesarrolladorComponent {
  projects: Project[] = [
    {
      title: 'Portafolio',
      image: '../../assets/imagenes/portafolio.png',
      description: 'Portafolio personal ya funcional pero siguen con mejoras',
      deployedUrl: 'https://edwincastillo.netlify.app/',
      showDescription: false
    },
    {
      title: 'Diseño Web',
      image: '../../assets/imagenes/diseñoWeb.png',
      description: 'Fue un proyecto para ver cómo sería mi portafolio, pero hay que aclarar que no es funcional es puro diseño para escritorio.',
      deployedUrl: 'https://pre-presentacion.netlify.app/',
      showDescription: false
    },
    {
      title: 'Home Study',
      image: '../../assets/imagenes/homeStudy.png',
      description: 'Este proyecto realizado es un prototipo, de una aplicación que este dirigida en el aprendizaje de las personas, sin importar su conocimiento o experiencia en el tema. Asimismo seria 100% educacion Online.      ',
      deployedUrl: 'https://home-study.netlify.app/',
      showDescription: false
    },
    {
      title: 'Tienda de Camisas',
      image: '../../assets/imagenes/tiendaCamisa.png',
      description: 'Diseño de una tienda de camisa para programadores, lo interezante es que las camizas tienen estampados de Tecnologia',
      deployedUrl: 'https://venta-camisas.netlify.app/',
      showDescription: false
    },
    {
      title: 'Informacion IPs',
      image: '../../assets/imagenes/IPs.png',
      description: 'Ver información de una IP, ya sea ipv4 o ipv6',
      deployedUrl: 'https://ipinf.netlify.app/',
      showDescription: false
    },
  ];

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


  selectedProject: Project | null = null;

  toggleDescription(project: Project) {
    project.showDescription = !project.showDescription;
  }
}
