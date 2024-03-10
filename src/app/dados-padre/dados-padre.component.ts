import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-padre',
  templateUrl: './dados-padre.component.html',
  styleUrls: ['./dados-padre.component.css']
})
export class DadosPadreComponent {
  playerScore = 0;
  machineScore = 0;
  currentPlayer = 'player'; 
  isGameOver = false;
  winner = '';

  constructor() {}

  rollDiceForPlayer() {
    if (this.isGameOver || this.currentPlayer !== 'player') return;

    const result = Math.floor(Math.random() * 6) + 1;
    this.playerScore += result;
    this.checkWinner();

    if (!this.isGameOver) {
      this.currentPlayer = 'maquina';
      setTimeout(() => this.rollDiceForMachine(), 1000);
    }
  }

  rollDiceForMachine() {
    if (this.isGameOver) return;

    const result = Math.floor(Math.random() * 6) + 1;
    this.machineScore += result;
    this.checkWinner();

    if (!this.isGameOver) {
      this.currentPlayer = 'player';
    }
  }

  checkWinner() {
    if (this.playerScore >= 20) {
      this.isGameOver = true;
      this.winner = 'Jugador';
    } else if (this.machineScore >= 20) {
      this.isGameOver = true;
      this.winner = 'Maquina';
    }
  }

  resetGame() {
    this.playerScore = 0;
    this.machineScore = 0;
    this.currentPlayer = 'player';
    this.isGameOver = false;
    this.winner = '';
  }
}
