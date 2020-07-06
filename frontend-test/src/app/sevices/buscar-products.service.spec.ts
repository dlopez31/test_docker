import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BuscarProductsService } from './buscar-products.service';
import { environment } from '../../environments/environment';

describe('Pruebas Service BuscarProductsService', () => {

    const urlBase = `${environment.urlBase}products/`;
    const mockResponse = {
        "ok": true,
        "pagina": 1,
        "products": [
            {
                "id": 1,
                "brand": "ooy eqrceli",
                "description": "rlñlw brhrka",
                "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
                "price": 249362
            }
        ],
        "palindomo": true
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BuscarProductsService]
        });
    });

    describe('Obteniendo data', () => {
        it('Prueba que se obtenga el resultado',
            inject([HttpTestingController, BuscarProductsService], (httpMock: HttpTestingController, buscarProductsService: BuscarProductsService) => {
                buscarProductsService.getProduct()
                    .subscribe(
                        (res) => {
                            expect(res).toEqual(mockResponse);
                        }
                    );
                const req = httpMock.expectOne(`${urlBase}`);
                expect(req.request.method).toBe('GET');
                req.flush(mockResponse);
            })
        );
    });
    describe('Obteniendo data pasandole un valor', () => {
        it('Prueba que se obtenga el resultado',
            inject([HttpTestingController, BuscarProductsService], (httpMock: HttpTestingController, buscarProductsService: BuscarProductsService) => {
                buscarProductsService.getProduct('1')
                    .subscribe(
                        (res) => {
                            expect(res).toEqual(mockResponse);
                        }
                    );
                const req = httpMock.expectOne(`${urlBase}1`);
                expect(req.request.method).toBe('GET');
                req.flush(mockResponse);
            })
        );
    });
});
