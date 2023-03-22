import { Component } from '@angular/core';
import { Project } from './proyectos-desarrollador.model';

@Component({
  selector: 'app-proyectos-desarrollador',
  templateUrl: './proyectos-desarrollador.component.html',
  styleUrls: ['./proyectos-desarrollador.component.css']
})
export class ProyectosDesarrolladorComponent {
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

  selectedProject: Project | null = null;

  toggleDescription(project: Project) {
    project.showDescription = !project.showDescription;
  }
}
