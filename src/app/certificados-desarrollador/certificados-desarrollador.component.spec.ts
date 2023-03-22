import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosDesarrolladorComponent } from './certificados-desarrollador.component';

describe('CertificadosDesarrolladorComponent', () => {
  let component: CertificadosDesarrolladorComponent;
  let fixture: ComponentFixture<CertificadosDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosDesarrolladorComponent ]
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
