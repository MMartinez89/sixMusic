import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {SpotifyService} from '../../service/spotify.service'

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {

  topTracks: any[] = [];
  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.topTracks('4QfIAajOjv8mMdWMy9fM0g')
    .subscribe((data: any[]) => {
      this.topTracks = data;
      console.log(this.topTracks);
    },(err)=>{
      console.log(err)
    }
    );
  }

  ngOnInit(): void {
  }
} 
