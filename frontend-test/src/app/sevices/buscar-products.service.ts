import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Respuesta } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BuscarProductsService {

  public urlBase = `${environment.urlBase}products/`;

  constructor(private http: HttpClient) { }

  getProduct(valor?: string): Observable<Respuesta> {
    const url = valor ? `${this.urlBase}${valor}` : `${this.urlBase}`
    return this.http.get<Respuesta>(`${url}`);
  }
}
