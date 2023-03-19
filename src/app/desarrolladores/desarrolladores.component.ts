import { Component } from '@angular/core';
import { Developer, Project } from './desarrolladores.model';

@Component({
  selector: 'app-desarrolladores',
  templateUrl: './desarrolladores.component.html',
  styleUrls: ['./desarrolladores.component.css']
})
export class DesarrolladoresComponent {
  developers: Developer[] = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      projects: [
        {
          title: 'Proyecto 1',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 1',
          deployedUrl: 'https://ejemplo.com/proyecto-1'
        },
        {
          title: 'Proyecto 2',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 2',
          deployedUrl: 'https://ejemplo.com/proyecto-2'
        },
        {
          title: 'Proyecto 3',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 3',
          deployedUrl: 'https://ejemplo.com/proyecto-3'
        }
      ]
    },
    {
      name: 'Jane Smith',
      phone: '555-123-4567',
      projects: [
        {
          title: 'Proyecto 4',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 4',
          deployedUrl: 'https://ejemplo.com/proyecto-4'
        },
        {
          title: 'Proyecto 5',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 5',
          deployedUrl: 'https://ejemplo.com/proyecto-5'
        },
        {
          title: 'Proyecto 6',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 6',
          deployedUrl: 'https://ejemplo.com/proyecto-6'
        }
      ]
    },
    {
      name: 'Edwin Castillo',
      phone: '123-456-7890',
      projects: [
        {
          title: 'Proyecto 7',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 4',
          deployedUrl: 'https://ejemplo.com/proyecto-4'
        },
        {
          title: 'Proyecto 8',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 5',
          deployedUrl: 'https://ejemplo.com/proyecto-5'
        },
        {
          title: 'Proyecto 9',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 6',
          deployedUrl: 'https://ejemplo.com/proyecto-6'
        }
      ]
    },
    {
      name: 'Alejandro Arroyo',
      phone: '123-456-7890',
      projects: [
        {
          title: 'Proyecto 10',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 4',
          deployedUrl: 'https://ejemplo.com/proyecto-4'
        },
        {
          title: 'Proyecto 11',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 5',
          deployedUrl: 'https://ejemplo.com/proyecto-5'
        },
        {
          title: 'Proyecto 12',
          image: 'https://via.placeholder.com/200x150',
          description: 'Descripción del proyecto 6',
          deployedUrl: 'https://ejemplo.com/proyecto-6'
        }
      ]
    }
  ];
  

  selectedDeveloper: Developer | null = null;
  selectedProject: Project | null = null;


  selectDeveloper(developer: Developer) {
    this.selectedDeveloper = developer;
    this.selectedProject = null;
  }

  showDetails(project: Project) {
    this.selectedProject = project;
  }

}
