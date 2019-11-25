import { Component, OnInit } from '@angular/core';
import { FilmeService } from './../../services/filme.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filmes: any;

  
  constructor(private router: Router, private filmeService: FilmeService ) {
   }

  ngOnInit() {
    this.filmeService.getFilmes()
      .subscribe(retorno => {
        this.filmes = retorno ;
        console.log(this.filmes);
      });
   
  }

  verfilme(id){
    this.router.navigate(['/filme',id]);
}

}



