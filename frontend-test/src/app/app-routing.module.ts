import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './pagina/buscador/buscador.component';

const routes: Routes = [
  {
    path: 'buscador',
    component: BuscadorComponent
  },
  {
    path: '**',
    redirectTo: 'buscador'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
