import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDesarrolladorComponent } from './proyectos-desarrollador.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('ProyectosDesarrolladorComponent', function () {
  let component: ProyectosDesarrolladorComponent;
  let fixture: ComponentFixture<ProyectosDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProyectosDesarrolladorComponent
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
