import { BuscadorComponent } from './buscador.component';
import { Respuesta } from '../../interfaces/interfaces';

describe('Pruebas BuscadorComponent', () => {
  let componente: BuscadorComponent;

  beforeEach(() => {
    componente = new BuscadorComponent();
  });

  it('Cuando el valor del evento sea null', () => {
    componente.listarProducto(null);
    expect(componente.respuesta).toEqual(null);
    expect(componente.products).toEqual([]);
  });

  it('Cuando el valor del evento sea tien los datos', () => {
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
    componente.listarProducto(respuesta);
    expect(componente.respuesta).toEqual(respuesta);
    expect(componente.products.length).toBeGreaterThan(0);
  });
});