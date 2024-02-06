import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './ppt/ppt.component';
import { TuComponenteComponent } from './tu-componente/tu-componente.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path:'piedrapapeltijera', component: PptComponent},
  {path:'aleatorio' , component :TuComponenteComponent},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
