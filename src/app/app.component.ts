import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {  
    translate.use(this.currentLanguage);
  }
 
  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
    this.currentLanguage = idioma;
  }
}
