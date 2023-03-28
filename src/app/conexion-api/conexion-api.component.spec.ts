import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionAPIComponent } from './conexion-api.component';

describe('ConexionAPIComponent', () => {
  let component: ConexionAPIComponent;
  let fixture: ComponentFixture<ConexionAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
