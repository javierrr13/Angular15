import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaDePersonajes:Personaje[]=[];
  personaje1:Personaje= new Personaje("Pepe","Majo",0,"/assets/imagenes/10.png")
  imagen1:string="/assets/imagenes/10.png"
  ngOnInit(): void {
    this.listaDePersonajes=[
      new Personaje("Pepe","Majo",35,"/assets/imagenes/10.png"),
      new Personaje("Luis","El butanero",67,"/assets/imagenes/11.png"),
      new Personaje("Armando","Fontanero del pueblo",44,"/assets/imagenes/12.png"),
      new Personaje("Jose","Torero a jornada partida",34,"/assets/imagenes/13.png")
    ]
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