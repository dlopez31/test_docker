import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BuscarProductsService } from '../../sevices/buscar-products.service';
import { Respuesta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() eventRespuesta = new EventEmitter<Respuesta>();
  public resultado = true;

  constructor(private buscarProductsService: BuscarProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  buscar(event: string): void {
    event = event.toLowerCase().replace(/\s/g, '');
    if (event !== '' && isNaN(Number(event))) {
      if (event.length > Number('2')) {
        this.getProducts(event);
      } else {
        return;
      }
    } else {
      this.getProducts(event);
    }
  }

  getProducts(valor?: string) {
    this.buscarProductsService.getProduct(valor)
      .subscribe((resp: Respuesta) => {
        if (resp?.ok) {
          this.resultado = true;
          this.eventRespuesta.emit(resp);
        } else {
          this.resultado = false;
          this.eventRespuesta.emit(null);
        }
      }, (err) => {
        this.resultado = false;
        this.eventRespuesta.emit(null);
        console.log(err.message);
      });
  }

}
