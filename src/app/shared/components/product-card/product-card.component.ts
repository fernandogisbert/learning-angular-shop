import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input () nombreProduct:string = 'por defecto';
  @Input () precioProduct:number = 0;
  @Input () cantidadInicial:number = 0;
  @Input () fotoProduct:string ='';
  @Output () cantidadProduct = new EventEmitter<number>();

  constructor() { 

  }

  ngOnInit(): void {

  }

  sumarCantidad(){

    this.cantidadProduct.emit(this.cantidadInicial += 1)
  }

}

