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
  
  constructor(private router:Router){
                   
  }
  ChangeRoute(){
      this.router.navigate(['/semaforo'])
  }
}
