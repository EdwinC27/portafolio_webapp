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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getPeticionCertificados function', () => {
    expect(service.getPeticionCertificados).toBeTruthy();
  });

  it('should have getPeticionProyectos function', () => {
    expect(service.getPeticionProyectos).toBeTruthy();
  });

  it('should handle errors when getting Certificados', () => {
    service.getPeticionCertificados().subscribe({
      next: () => fail('expected an error, but got a success response'),
      error: (err: any) => {
        expect(err).toBeTruthy();
      }
    });
  
    const req = httpMock.expectOne('http://localhost:3000/certificados');
    expect(req.request.method).toBe('GET');
  
    req.flush('Invalid request parameters', {
      status: 404,
      statusText: 'Not found'
    });
  });
});
