import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PptComponent } from './ppt/ppt.component';
import { TuComponenteComponent } from './tu-componente/tu-componente.component';
import {MatButtonModule} from '@angular/material/button';
import { Error404Component } from './error404/error404.component';
import { TextoComponent } from './texto/texto.component';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ZurulloComponent } from './zurullo/zurullo.component';
import { GameComponent } from './game/game.component';
import { DadosPadreComponent } from './dados-padre/dados-padre.component';
import { DatosHijoComponent } from './datos-hijo/datos-hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    MaterialComponentsComponent,
    ProgressBarComponent,
    PptComponent,
    TuComponenteComponent,
    Error404Component,
    TextoComponent,
    ListaTarjetasComponent,
    TarjetaComponent,
    ZurulloComponent,
    GameComponent,
    DadosPadreComponent,
    DatosHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatProgressBarModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{}
