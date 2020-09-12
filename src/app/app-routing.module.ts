import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {MusicaComponent} from './component/musica/musica.component';
import {GaleriaComponent} from './component/galeria/galeria.component';
import {ContactoComponent} from './component/contacto/contacto.component';
import {VerifyTokenGuard} from './service/guard/verify-token.guard';
import { HeroComponent } from './component/hero/hero.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  /*{path: 'home',canActivate:[VerifyTokenGuard], component: HomeComponent},
  {path: 'hero',canActivate:[VerifyTokenGuard], component: HeroComponent},*/
  { path: '', pathMatch: 'full', redirectTo: 'login' },
 // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
