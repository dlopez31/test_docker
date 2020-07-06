import { Component } from '@angular/core';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent {
  public datos = {
    servicio: 'Servisio al cliente de lider.cl: WhatsApp',
    telefono: '+56957211492',
    horario: '| Horaio: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00'
  }
  constructor() { }
}
