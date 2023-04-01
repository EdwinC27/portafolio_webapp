import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
  });

  it('should add supported languages', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(translateService.getLangs()).toEqual(['en', 'es']);
  });

  it('should use browser language if it matches a supported language', () => {
    spyOn(translateService, 'getBrowserLang').and.returnValue('es');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(translateService.currentLang).toEqual('es');
  });

  it('should use default language if browser language does not match a supported language', () => {
    spyOn(translateService, 'getBrowserLang').and.returnValue('fr');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(translateService.currentLang).toEqual('en');
  });

  it('should change language when calling cambiarIdioma method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.cambiarIdioma('es');
    expect(translateService.currentLang).toEqual('es');
  });

});
