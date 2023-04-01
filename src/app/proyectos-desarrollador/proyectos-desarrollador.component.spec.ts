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
        title: 'Project 1',
        image: 'image1.png',
        description: 'Description 1',
        deployedUrl: 'http://project1.com'
      },
      {
        title: 'Project 2',
        image: 'image2.png',
        description: 'Description 2',
        deployedUrl: 'http://project2.com'
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

});
