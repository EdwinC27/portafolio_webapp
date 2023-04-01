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

  it('should create', () => {
    expect(AppComponent).toBeTruthy();
  });

  it('should not change language for unsupported language', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const appComponent = fixture.componentInstance;
    appComponent.cambiarIdioma('fr');
    expect(appComponent.currentLanguage).toEqual('en');
    expect(translateService.currentLang).toEqual('en');
  });
});
