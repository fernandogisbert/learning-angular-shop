import { Component, OnInit } from '@angular/core';
import { Product, ProductosService } from 'src/app/shared/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  resultado: Product[] = [];

  constructor(private service: ProductosService) { }

  ngOnInit(): void {

    this.resultado =this.service.mostrarProductos();
    // console.log(this.resultado);

  }

}
