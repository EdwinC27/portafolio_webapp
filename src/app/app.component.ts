import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PORTAFOLIO';

  constructor(private translate: TranslateService) {
    // Agrega los idiomas admitidos
    translate.addLangs(['en', 'es']);

    // Establece el idioma actual
    translate.setDefaultLang('en');

    // Obtiene el idioma actual del navegador
    const browserLang = translate.getBrowserLang()?? 'en'; 
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

    this.translate.use('es');

  }
  currentLanguage = 'es';

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
    this.currentLanguage = idioma;
  }
}
