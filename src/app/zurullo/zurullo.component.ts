import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zurullo',
  templateUrl: './zurullo.component.html',
  styleUrls: ['./zurullo.component.css']
})
export class ZurulloComponent {
@Input() saludo:string | undefined;
}
