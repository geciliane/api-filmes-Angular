import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }
  nome: any;
  apik: string='f461e0056d64ad825b0caec5d9fb6d65';

  getFilmes(): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key='+this.apik+'&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

  }

  getPesquisa(nome:string):Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key='+this.apik+'&language=pt-BR&query='+nome+'&page=1&include_adult=false');
  }

  getMovie(id:string): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/'+id+'?api_key=f461e0056d64ad825b0caec5d9fb6d65&language=pt-BR');
  }

}