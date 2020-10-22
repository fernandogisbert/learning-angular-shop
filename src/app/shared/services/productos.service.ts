import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  listaProductos: Product[] = [];

  constructor() { 

     this.listaProductos = [
      {nombre: 'Pelota', precio: 10, id: '1', cantidad: 0, foto: "../../../../assets/img/Basketball.jpeg"},
      {nombre: 'Armario', precio: 20, id: '2', cantidad: 0, foto:"../../../../assets/img/armario.jpg"},
      {nombre: 'Ordenador', precio:500, id: '3', cantidad: 0, foto:"../../../../assets/img/ordenador.jpg"},
      {nombre: 'Guitarra', precio:600, id: '4', cantidad: 0, foto:"../../../../assets/img/guitarra.jpg"},
      {nombre: 'Pipas', precio:1, id: '5', cantidad: 0, foto:"../../../../assets/img/pipas.jpg"},
      {nombre: 'Camiseta', precio:15, id: '6', cantidad: 0, foto:"../../../../assets/img/camiseta.jpg"},
    ]
  }

  mostrarProductos(){

    return this.listaProductos;

  }
}

export interface Product{
  nombre: string, 
  precio: number, 
  id: string, 
  cantidad: number,
  foto: string,
}
