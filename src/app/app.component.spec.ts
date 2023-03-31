import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {
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
  });

  it('should use default language if browser language does not match a supported language', () => {
    spyOn(TranslateService.prototype, 'getBrowserLang').and.returnValue('fr');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const translateService = TestBed.inject(TranslateService);
    expect(translateService.currentLang).toEqual('en');
  });


  it('should add supported languages', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translateService = fixture.debugElement.injector.get(TranslateService);
    expect(translateService.getLangs()).toEqual(['en', 'es']);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
