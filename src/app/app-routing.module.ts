import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { FilmeComponent } from './components/filme/filme.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "pesquisar", component: PesquisarComponent },
  { path: "filme/:id", component: FilmeComponent },
  // { path: "", pathMatch: "full", redirectTo: "home" },
  // { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
