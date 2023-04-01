import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosDesarrolladorComponent } from './certificados-desarrollador.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { conexionAPI } from '../conexion-api/conexion-api.service';

describe('CertificadosDesarrolladorComponent', function () {
  let component: CertificadosDesarrolladorComponent;
  let fixture: ComponentFixture<CertificadosDesarrolladorComponent>;
  let mockService: jasmine.SpyObj<conexionAPI>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj(conexionAPI, ['getPeticionCertificados']);

    await TestBed.configureTestingModule({
      providers: [
        TranslateService
      ],
      declarations: [
        CertificadosDesarrolladorComponent
      ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot()
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
