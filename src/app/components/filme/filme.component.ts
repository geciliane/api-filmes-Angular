import { Component, OnInit, Input } from '@angular/core';
import { FilmeService } from './../../services/filme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})

export class FilmeComponent {
  
  filme: any = {};

  constructor(private router: ActivatedRoute,
    private FilmeService: FilmeService) {

    this.router.params.subscribe(params => {
      console.log(params);

      this.FilmeService.getMovie(params['id'])
        .subscribe(filme => {
          console.log(filme);
          this.filme = filme;
        })
    })

  }

}
