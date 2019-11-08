import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmeImagem'
})
export class FilmeImagemPipe implements PipeTransform {

  transform(filmes: any): any {

  let url = "http://image.tmdb.org/t/p/w400";

  if (filmes.poster_path) {
    return url + filmes.poster_path;
  } else {
    if (filmes.backdrop_path) {
      return url + filmes.backdrop_path;
    } else {
      
      return "assets/img/noimage.png";
    }
  }
}
}
