import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AvisoComponent } from './component/aviso/aviso.component';
import { NavComponent } from './component/nav/nav.component';
import { BuscadorComponent } from './pagina/buscador/buscador.component';
import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AvisoComponent,
    NavComponent,
    BuscadorComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavComponent,
    ImagePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
