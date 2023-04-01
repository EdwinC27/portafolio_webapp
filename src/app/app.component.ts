import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  whatsapp: string = "https://ultramsg.com/m/3PJYMWQ";
  github: string = "https://github.com/EdwinC27";
  correo: string = "mailto:edwin.a.castillo.27@gmail.com";
  linkedin: string = "https://www.linkedin.com/in/edwin-alejandro-castillo-arroyo-276226243/";

  currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {  
    translate.use(this.currentLanguage);
  }
 
  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
    this.currentLanguage = idioma;
  }
}
