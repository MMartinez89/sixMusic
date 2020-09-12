import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   /* $(document).ready(function(){
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 2000,
        pager: false,
        controls: false,
        auto: true
      });
    });*/
  }



  

}
