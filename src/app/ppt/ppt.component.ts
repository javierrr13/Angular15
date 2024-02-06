import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ppt',
    templateUrl: './ppt.component.html',
    styleUrls: ['./ppt.component.css'],
})
export class PptComponent implements OnInit {
    userLives: number[] = [1, 2, 3, 4, 5];
    computerLives: number[] = [1, 2, 3, 4, 5];
    userChoice: string | null = null;
    computerChoice: string | null = null;
    winner: string | null = null;
    isComputing: boolean = false;

    selectOption(option: string): void {
        this.userChoice = option.toLowerCase();
        this.startComputing();
        setTimeout(() => {
            this.computerChoice = ['piedra', 'papel', 'tijera'][Math.floor(Math.random() * 3)];
            this.determineWinner();
            this.isComputing = false;
        }, 2000);
    }

    resetGame(): void {
        this.userChoice = null;
        this.computerChoice = null;
        this.winner = null;
        this.userLives = [1, 2, 3, 4, 5];
        this.computerLives = [1, 2, 3, 4, 5];
    }

    private determineWinner(): void {
        if (
            (this.userChoice === 'piedra' && this.computerChoice === 'tijera') ||
            (this.userChoice === 'papel' && this.computerChoice === 'piedra') ||
            (this.userChoice === 'tijera' && this.computerChoice === 'papel')
        ) {
            this.winner = 'Ganas';
            this.computerLives.pop();
        } else if (this.userChoice === this.computerChoice) {
            this.winner = 'Empatas';
        } else {
            this.winner = 'Pierdes';
            this.userLives.pop();
        }

        if (this.userLives.length === 0 || this.computerLives.length === 0) {
            this.resetGame();
            alert('¡Partida finalizada! El juego se reiniciará.');
        }
    }

    private startComputing(): void {
        this.isComputing = true;
    }

    ngOnInit(): void {}
}
