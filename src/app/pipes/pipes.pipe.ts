import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class PipesPipe implements PipeTransform {

  transform(images:any[]):String  {
    if(!images){
      return 'assets/images/noimage.png';
    }
    if(images.length<0){
      return images[0].url;
    }
    else{
      return 'assets/images/noimage.png';
    }
  }

}
