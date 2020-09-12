import {environment} from '../../environments/environment'
import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }

  
getQuery(query:string){

    
    const url = `${environment.apiSpotify}/${query}`;
   
    return this.http.get(url);  
}
getArtista(id: String) {
  return this.getQuery(`artists/${id}`);
}

topTracks(id: String){
  return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data ['tracks']));
}

}


