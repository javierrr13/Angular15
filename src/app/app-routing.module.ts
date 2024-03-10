import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './ppt/ppt.component';
import { TuComponenteComponent } from './tu-componente/tu-componente.component';
import { Error404Component } from './error404/error404.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ListaComponent } from './lista/lista.component';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';
import { GameComponent } from './game/game.component';
import { DadosPadreComponent } from './dados-padre/dados-padre.component';


const routes: Routes = [
  {path:'listaTarjetas',component:ListaTarjetasComponent},
  {path:'piedrapapeltijera/:nick', component: PptComponent},
  {path:'aleatorio' , component :TuComponenteComponent},
  {path:'progresbar', component:ProgressBarComponent},
  {path:'jugadores', component:ListaComponent},
  {path:'game', component:GameComponent},
  { path: '', redirectTo: '/dados-padre', pathMatch: 'full' },
  { path: 'dados-padre', component: DadosPadreComponent },
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
