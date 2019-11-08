import { Component, OnInit } from '@angular/core';
import { FilmeService } from './../../services/filme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.scss']
})
export class PesquisarComponent implements OnInit {
filmes: any [] = [];
  constructor(private filmeService: FilmeService, private router: Router) { }

  ngOnInit() {
  }
  buscar(nome:string){
    console.log(nome);

    this.filmeService.getPesquisa(nome).subscribe((data:any) =>{
      console.log(data);

      this.filmes = data;
    });
  }

    verfilme(id){
      this.router.navigate(['/filme',id]);
  }
 

}
