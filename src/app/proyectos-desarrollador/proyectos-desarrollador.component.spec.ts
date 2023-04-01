import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ProyectosDesarrolladorComponent } from './proyectos-desarrollador.component';
import { Project } from './proyectos-desarrollador.model';

describe('ProyectosDesarrolladorComponent', () => {
  let component: ProyectosDesarrolladorComponent;
  let fixture: ComponentFixture<ProyectosDesarrolladorComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDesarrolladorComponent ],
      imports: [ HttpClientTestingModule, TranslateModule.forRoot() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDesarrolladorComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve projects from the server', () => {
    const mockResponse = [
      {
        "title": "Portafolio",
        "image": "../../assets/imagenes/portafolio.png",
        "description": "Portafolio personal ya funcional pero siguen con mejoras",
        "deployedUrl": "https://edwincastillo.netlify.app/",
        "showDescription": "false"
      },
      {
        "title": "Diseño Web",
        "image": "../../assets/imagenes/diseñoWeb.png",
        "description": "Fue un proyecto para ver cómo sería mi portafolio, pero hay que aclarar que no es funcional es puro diseño para escritorio.",
        "deployedUrl": "https://pre-presentacion.netlify.app/",
        "showDescription": "false"
      },
      {
        "title": "Home Study",
        "image": "../../assets/imagenes/homeStudy.png",
        "description": "Este proyecto realizado es un prototipo, de una aplicación que este dirigida en el aprendizaje de las personas, sin importar su conocimiento o experiencia en el tema. Asimismo seria 100% educacion Online.",
        "deployedUrl": "https://home-study.netlify.app/",
        "showDescription": "false"
      },
      {
        "title": "Tienda de Camisas",
        "image": "../../assets/imagenes/tiendaCamisa.png",
        "description": "Diseño de una tienda de camisa para programadores, lo interezante es que las camizas tienen estampados de Tecnologia",
        "deployedUrl": "https://venta-camisas.netlify.app/",
        "showDescription": "false"
      },
      {
        "title": "Informacion IPs",
        "image": "../../assets/imagenes/IPs.png",
        "description": "Ver información de una IP, ya sea ipv4 o ipv6",
        "deployedUrl": "https://ipinf.netlify.app/",
        "showDescription": "false"
      }
    ];

    const req = httpMock.expectOne('http://localhost:3000/proyectos');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(component.proyecto.length).toEqual(mockResponse.length);
  });

  it('should toggle the description of a project', () => {
    const project: Project = {
      title: 'Project 1',
      image: 'image1.png',
      description: 'Description 1',
      deployedUrl: 'http://project1.com',
      showDescription: false
    };
  
    component.toggleDescription(project);
    expect(project.showDescription).toBe(true);
  
    component.toggleDescription(project);
    expect(project.showDescription).toBe(false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
