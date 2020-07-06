import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { BuscarProductsService } from '../../sevices/buscar-products.service';
import { Respuesta } from '../../interfaces/interfaces';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AvisoComponent } from '../aviso/aviso.component';

describe('Pruebas component NavComponent', () => {

  let componente: NavComponent;
  const servicio = new BuscarProductsService(null);
  const respuesta: Respuesta = {
    ok: true,
    pagina: 1,
    products: [
      {
        id: 1,
        brand: "ooy eqrceli",
        description: "rlñlw brhrka",
        image: "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        price: 249362
      }
    ],
    palindomo: true
  };

  beforeEach(() => {
    componente = new NavComponent(servicio);
  });


  it('Debe obtener la carga completa al invocar ngOnInit', () => {
    spyOn(servicio, 'getProduct').and.callFake(() => {
      return of(respuesta);
    });
    componente.ngOnInit();
    expect(componente.resultado).toBeTruthy();
  });

  it('Debe obtener la data cuando el valor a buscar es un numero', () => {
    spyOn(servicio, 'getProduct').and.callFake(() => {
      return of(respuesta);
    });
    componente.buscar('1');
    expect(componente.resultado).toBeTruthy();

  });

  it('Debe obtener la data cuando el valor a buscar son mas de 3 caracteres string', () => {
    spyOn(servicio, 'getProduct').and.callFake(() => {
      return of(respuesta);
    });
    componente.buscar('abc');
    expect(componente.resultado).toBeTruthy();

  });
  it('No debe buscar la data cuando el valor es un string menor a 3 caracteres', () => {
    spyOn(servicio, 'getProduct').and.callFake(() => {
      return of(respuesta);
    });
    componente.buscar('ab');
    expect(componente.resultado).toBeTruthy();

  });

  it('Debe emitir el evento cuando es convocado con un valor', () => {
    spyOn(servicio, 'getProduct').and.callFake(() => {
      return of(respuesta);
    });
    let resultado: Respuesta;
    componente.eventRespuesta.subscribe(data => {
      resultado = data;
    });
    componente.getProducts('1');
    expect(respuesta).toEqual(resultado);
    expect(componente.resultado).toBeTruthy();
  });

  it('Debe emitir el evento cuando es convocado sin valor', () => {
    spyOn(servicio, 'getProduct').and.callFake(() => {
      return of(null);
    });
    let resultado: Respuesta;
    componente.eventRespuesta.subscribe(data => {
      resultado = data;
    });
    componente.getProducts('1');
    expect(resultado).toEqual(null);
    expect(componente.resultado).toBeFalsy();
  });

  it('Cuando el servicio retorne un error', () => {
    spyOn(servicio, 'getProduct').and.returnValue(throwError({ error: 'error' }));

    let resultado: Respuesta;
    componente.eventRespuesta.subscribe(data => {
      resultado = data;
    });
    componente.getProducts('1');
    expect(resultado).toEqual(null);
    expect(componente.resultado).toBeFalsy();
  });
});


describe('Prueba de Eventos keyup NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  const servicio = new BuscarProductsService(null);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        NavComponent,
        AvisoComponent
      ], providers: [BuscarProductsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('prueba que el elemento app-aviso exista en NavComponet', () => {
    const elemento = fixture.debugElement.query(By.directive(AvisoComponent));
    expect(elemento.name).toEqual('app-aviso');
  });

  it('Input "txtBuscador" NavComponet', () => {
    const elemento = fixture.debugElement.query(By.css('input')).attributes.name;
    expect(elemento).toEqual('txtBuscador');
  });

  it('Prueba que el evento keyup convoque el metodo buscar', () => {
    const espia = spyOn(component, 'buscar').and.returnValue();
    const debugElement = fixture.debugElement.query(By.css('input'));
    debugElement.triggerEventHandler('keyup', '');
    expect(espia).toHaveBeenCalled();

  });
});


