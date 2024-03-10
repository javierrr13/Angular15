import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datos-hijo',
  templateUrl: './datos-hijo.component.html',
  styleUrls: ['./datos-hijo.component.css']
})
export class DatosHijoComponent {
  @Output() rollResult = new EventEmitter<number>();
  diceNumber?: number;
  roll() {
    const result = Math.floor(Math.random() * 6) + 1;
    this.rollResult.emit(result);
  }
}
