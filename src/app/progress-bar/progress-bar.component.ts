import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  porcentajeDeCarga = 1; // Inicializa el porcentaje de carga

  ngOnInit() {
    // Inicia el bucle para actualizar el porcentaje de carga cada 100 milisegundos
    setInterval(() => {
      this.porcentajeDeCarga++;
      if (this.porcentajeDeCarga > 100) {
        this.porcentajeDeCarga = 1;
      }
    }, 100);
  }
}
