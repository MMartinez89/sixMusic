import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenGuard implements CanActivate {
  constructor(public authService: AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkExpiresToken();
  }

  verifyRenew(exp: number): Promise<boolean>{
    return new Promise((resolve,reject)=>{
      let tokenExp = new Date(exp*1000);
      let now = new Date();

      now.setTime(now.getTime()+(1*60*60*1000));
      //retorna un numero en milisegunfo desde el 01/1970
      if(tokenExp.getTime()> now.getTime()){
        resolve(true);
      }else{
        this.authService.renewToken().
        subscribe(()=>{
          resolve(true);
        },()=>{
          this.authService.logout();
          reject(false);
        });
      }
    });

  }

  private checkExpiresToken(){
    const expiredToken = this.tokenEval(this.authService.expireToken());
    if(expiredToken){
      this.authService.logout();
      return false;
    }
    //verifica si se tiene que renovar el token
    return this.verifyRenew(this.authService.expireToken());
  }

  private tokenEval(exp:number){
    let now = new Date().getTime()/1000;
    if(exp < now){
      return true;
    }else{
      return false;
    }
  }
  
}
