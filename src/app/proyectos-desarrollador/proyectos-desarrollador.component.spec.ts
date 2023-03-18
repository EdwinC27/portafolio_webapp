import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosDesarrolladorComponent } from './proyectos-desarrollador.component';

describe('ProyectosDesarrolladorComponent', () => {
  let component: ProyectosDesarrolladorComponent;
  let fixture: ComponentFixture<ProyectosDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosDesarrolladorComponent ]
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
