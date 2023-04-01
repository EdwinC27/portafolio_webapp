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

  it('should create', () => {
    expect(AppComponent).toBeTruthy();
  });
});
