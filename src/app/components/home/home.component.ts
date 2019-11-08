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
  filme;
  
  constructor(private router: ActivatedRoute, private routere: Router, private filmeService: FilmeService ) {

    // this.router.params.subscribe(params => {
    //   console.log(params);
  
    
    //    this.filmeService.getMovie(params['id'])
    //     .subscribe(filme => {
    //       console.log(filme);
    //       this.filme = filme;
    //       // this.loadingPelicula = false;
    //     })
    // })
   }

  ngOnInit() {
    this.filmeService.getFilmes()
      .subscribe(retorno => {
        this.filmes = retorno ;
        console.log(this.filmes);
      });
   
  }

  verfilme(id){
    this.routere.navigate(['/filme',id]);
//     this.filmeService.getMovie(id)
//         .subscribe(filme => {
//            console.log(filme);
//            this.filme = filme;
//     // this.filme=this.filmes;
//     // console.log(this.filme);
//     this.router.params.subscribe(params => {
//       //   console.log(params);
    
// })

// })
}
// teste(item: any, id: string) {

//   let filmeId;

//   filmeId = item.id;

//   this.routere.navigate(["/filme", filmeId]);
// }
}



