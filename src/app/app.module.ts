import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { ProyectosDesarrolladorComponent } from './proyectos-desarrollador/proyectos-desarrollador.component';
import { CertificadosDesarrolladorComponent } from './certificados-desarrollador/certificados-desarrollador.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DesarrolladorComponent,
    ProyectosDesarrolladorComponent,
    CertificadosDesarrolladorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
