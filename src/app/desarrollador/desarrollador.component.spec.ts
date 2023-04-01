import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesarrolladorComponent } from './desarrollador.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

describe('DesarrolladoresComponent', function () {
  let component: DesarrolladorComponent;
  let fixture: ComponentFixture<DesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TranslateService
      ],
      declarations: [
        DesarrolladorComponent
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct value for presentacionImg', () => {
    expect(component.presentacionImg).toEqual("../../assets/imagenes/edwin.png");
  });
  
  it('should have an "alt" attribute on the image', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.getAttribute('alt')).toBeTruthy();
  });
});
