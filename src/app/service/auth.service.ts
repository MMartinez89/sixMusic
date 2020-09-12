import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  encoded = btoa(environment.clientId + ':' + environment.secretId);
  constructor(private http: HttpClient,
              private router: Router) 
              { 
                this.loadStorage();
              }

  login(grant_type='client_credentials'){ 
  const body = `grant_type=${grant_type}`;
    return this.http.post(`${environment.epLogin}`,body, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + this.encoded,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).pipe(map((data:any)=>{
      this.saveLocalStorage(data);
      return data;
    }));

  }

  renewToken(){
    return this.login('refresh_token');
  }

  isLogedIn(){
    
    const isLogged = this.token.length > 5;
    if(!isLogged){
      return false;
    }else{
      return true;
    }

  }

  logout(){
    
    localStorage.removeItem('sixMusic-token');
    this.router.navigate(['/login']);
  }

  expireToken():number{
    
    return +localStorage.getItem('spotify-exp');
  }

  saveLocalStorage(data):void{
    
    const expiresIn = new Date().setSeconds(data.expires_in);
    localStorage.setItem('sixMusic-token', data.access_token);
    localStorage.setItem('spotify-exp', expiresIn.toString());

    this.token = data.access_token;
  }

  private loadStorage():void{
    if (localStorage.getItem('sixMusic-token')){
      this.token = localStorage.getItem('sixMusic-token')
    }else{
      this.token = '';
    }
  }

}
