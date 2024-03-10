import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  jugadorActual: 'X' | 'O' = 'X';
  tablero: string[][] = this.crearTableroVacio();

  crearTableroVacio(): string[][] {
    return Array(3).fill(null).map(() => Array(3).fill(null));
  }

  hacerMovimiento(fila: number, columna: number): void {
    if (!this.tablero[fila][columna]) {
      this.tablero[fila][columna] = this.jugadorActual;
      if (this.verificarGanador()) {
        alert(`¡Jugador ${this.jugadorActual} gana!`);
        this.reiniciarJuego();
        return;
      }
      this.jugadorActual = this.jugadorActual === 'X' ? 'O' : 'X';
    }
  }

  verificarGanador(): boolean {
    for (let i = 0; i < 3; i++) {
      if (this.tablero[i].every(celda => celda === this.jugadorActual) ||
          this.tablero.every(fila => fila[i] === this.jugadorActual)) {
        return true;
      }
    }
    if (this.tablero[0][0] === this.jugadorActual &&
        this.tablero[1][1] === this.jugadorActual &&
        this.tablero[2][2] === this.jugadorActual ||
        this.tablero[0][2] === this.jugadorActual &&
        this.tablero[1][1] === this.jugadorActual &&
        this.tablero[2][0] === this.jugadorActual) {
      return true;
    }
    return false;
  }

  reiniciarJuego(): void {
    this.tablero = this.crearTableroVacio();
    this.jugadorActual = 'X';
  }
}
