import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDesarrolladorComponent } from './detalles-desarrollador.component';

describe('DetallesDesarrolladorComponent', () => {
  let component: DetallesDesarrolladorComponent;
  let fixture: ComponentFixture<DetallesDesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesDesarrolladorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
