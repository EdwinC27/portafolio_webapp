import { Component } from '@angular/core';
import { Project } from './desarrolladores.model';

@Component({
  selector: 'app-desarrolladores',
  templateUrl: './desarrolladores.component.html',
  styleUrls: ['./desarrolladores.component.css']
})
export class DesarrolladoresComponent {
  projects: Project[] = [
    {
      title: 'Proyecto 1',
      image: 'https://via.placeholder.com/200x150',
      description: 'Descripción del proyecto 1',
      deployedUrl: 'https://ejemplo.com/proyecto-1',
      showDescription: false
    },
    {
      title: 'Proyecto 2',
      image: 'https://via.placeholder.com/200x150',
      description: 'Descripción del proyecto 2',
      deployedUrl: 'https://ejemplo.com/proyecto-2',
      showDescription: false
    },
    {
      title: 'Proyecto 3',
      image: 'https://via.placeholder.com/200x150',
      description: 'Descripción del proyecto 3',
      deployedUrl: 'https://ejemplo.com/proyecto-3',
      showDescription: false
    },
    {
      title: 'Proyecto 4',
      image: 'https://via.placeholder.com/200x150',
      description: 'Descripción del proyecto 4',
      deployedUrl: 'https://ejemplo.com/proyecto-4',
      showDescription: false
    },
    {
      title: 'Proyecto 5',
      image: 'https://via.placeholder.com/200x150',
      description: 'Descripción del proyecto 5',
      deployedUrl: 'https://ejemplo.com/proyecto-5',
      showDescription: false
    },
    {
      title: 'Proyecto 6',
      image: 'https://via.placeholder.com/200x150',
      description: 'Descripción del proyecto 6',
      deployedUrl: 'https://ejemplo.com/proyecto-6',
      showDescription: false
    }
  ];
  
  selectedProject: Project | null = null;

  showDetails(project: Project) {
    this.selectedProject = project;
  }

  toggleDescription(project: Project) {
    project.showDescription = !project.showDescription;
  }
}
