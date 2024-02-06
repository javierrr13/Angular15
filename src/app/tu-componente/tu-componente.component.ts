// tu-componente.component.ts

import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './tu-componente.component.html',
  styleUrls: ['./tu-componente.component.css'],
})
export class TuComponenteComponent implements OnInit {
  usuario: any;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit() {
    this.getRandomUser();
  }

  getRandomUser() {
    this.randomUserService.getRandomUser().subscribe((data) => {
      this.usuario = data.results[0];
    });
  }
}
