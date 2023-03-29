import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosDesarrolladorComponent } from './certificados-desarrollador.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

describe('CertificadosDesarrolladorComponent', function () {
  let component: CertificadosDesarrolladorComponent;
  let fixture: ComponentFixture<CertificadosDesarrolladorComponent>;

  beforeEach(async () => {
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
