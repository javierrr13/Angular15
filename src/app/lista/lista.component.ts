import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaDePersonajes:Personaje[]=[];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
class Personaje{
  nombre:string
  descripcion:string
  edad:number
  imagen:string
  constructor(n:string, d:string, e:number, i:string){
    this.nombre= n
    this.descripcion=d
    this.edad=e
    this.imagen=i
  }
}