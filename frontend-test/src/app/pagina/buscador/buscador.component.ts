import { Component } from '@angular/core';
import { Respuesta, Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  public respuesta: Respuesta;
  public products: Product[];

  constructor() { }

  listarProducto(evento: Respuesta) {
    if (evento) {
      this.respuesta = evento;
      this.products = this.respuesta.products;
    } else {
      this.respuesta = null;
      this.products = [];
    }

  }
}
