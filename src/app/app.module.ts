import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './component/hero/hero.component';
import { HomeComponent } from './component/home/home.component';
import { MusicaComponent } from './component/musica/musica.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { GaleriaComponent } from './component/galeria/galeria.component';
import {PipesPipe} from './pipes/pipes.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoginComponent } from './component/login/login.component';
import { TokenInterceptor } from './service/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    MusicaComponent,
    ContactoComponent,
    GaleriaComponent,
    PipesPipe,
    DomseguroPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
