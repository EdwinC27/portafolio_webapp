import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { conexionAPI } from './conexion-api.service';

describe('conexionAPI', () => {
  let service: conexionAPI;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ conexionAPI ]
    });

    service = TestBed.inject(conexionAPI);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get certificados', () => {
    const dummyCertificados = [    
      {      
        name: 'Certificado 1',
        image: 'https://dummyimage.com/600x400/000/fff',      
        url: 'https://certificado1.com'    
      },    
      {      
        name: 'Certificado 2',      
        image: 'https://dummyimage.com/600x400/000/fff',      
        url: 'https://certificado2.com'    
      }  
    ];
  
    service.getPeticionCertificados().subscribe((certificados: string | any[]) => {
      expect(certificados.length).toBe(2);
      expect(certificados).toContain(dummyCertificados[0]);
      expect(certificados).toContain(dummyCertificados[1]);
    });
  
    const req = httpMock.expectOne('http://localhost:3000/certificados');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCertificados);
  });
  

  it('should get proyectos', () => {
    const dummyProyectos = [
      {
        title: 'Proyecto 1',
        image: 'https://dummyimage.com/600x400/000/fff',
        description: 'Descripción del proyecto 1',
        deployedUrl: 'https://proyecto1.com',
        showDescription: false
      },
      {
        title: 'Proyecto 2',
        image: 'https://dummyimage.com/600x400/000/fff',
        description: 'Descripción del proyecto 2',
        deployedUrl: 'https://proyecto2.com',
        showDescription: false
      }
    ];

    service.getPeticionProyectos().subscribe((proyectos: string | any[]) => {
      expect(proyectos.length).toBe(2);
      expect(proyectos).toEqual(dummyProyectos);
    });

    const req = httpMock.expectOne('http://localhost:3000/proyectos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProyectos);
  });
});
