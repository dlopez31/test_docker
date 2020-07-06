import { Location } from "@angular/common";
import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes, RouterOutlet } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { BuscadorComponent } from './pagina/buscador/buscador.component';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { AvisoComponent } from './component/aviso/aviso.component';
import { BuscarProductsService } from './sevices/buscar-products.service';

describe('Puebas Router:app', () => {
  let location: Location;
  let router: Router;
  let fixture;

  const routes: Routes = [
    { path: 'buscador', component: BuscadorComponent },
    {
      path: '**',
      redirectTo: 'buscador'
    }
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes)],
      declarations: [
        BuscadorComponent,
        AppComponent,
        NavComponent,
        AvisoComponent
      ], providers: [BuscarProductsService]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });

  });

  it('Navega a buscador', async () => {
    const success = await fixture.ngZone.run(() => router.navigateByUrl('buscador'));
    expect(success).toBeTruthy();
    expect(location.path()).toBe('/buscador');
  });

  it('Debe de tener un router-outlet', async () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });


});