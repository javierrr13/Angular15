import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miprimerproyectov15';
  personaje1: any;
  nombreDeUsuario:string="javi"
  constructor(private router:Router){
                   
  }
  ChangeRoute(){
    const rutas = [
      '/piedrapapeltijera',
      '/aleatorio',
      '/progresbar',
      '/jugadores',
      '/error404'
    ];
    const rutaAleatoria = rutas[Math.floor(Math.random() * rutas.length)]
    this.router.navigate([rutaAleatoria]);
  }
}
