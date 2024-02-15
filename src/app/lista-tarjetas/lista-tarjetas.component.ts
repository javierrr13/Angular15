import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent {
  datosDelHijo:string="";
  saludoParaZurullo:string="Hola que tal zurullo"
  listaDePersonajes:Personaje[]=[
     new Personaje("Pepe","Majo",35,"/assets/imagenes/10.png"),
      new Personaje("Luis","El butanero",67,"/assets/imagenes/11.png"),
      new Personaje("Armando","Fontanero del pueblo",44,"/assets/imagenes/12.png"),
      new Personaje("Jose","Torero a jornada partida",34,"/assets/imagenes/13.png")
  ]
  recibirDatos(datos:string){
    this.datosDelHijo=datos;
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
