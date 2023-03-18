import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProyectoDesarrolladorComponent } from './detalle-proyecto-desarrollador.component';

describe('DetalleProyectoDesarrolladorComponent', () => {
  let component: DetalleProyectoDesarrolladorComponent;
  let fixture: ComponentFixture<DetalleProyectoDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProyectoDesarrolladorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProyectoDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
