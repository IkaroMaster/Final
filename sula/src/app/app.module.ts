import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { NotaEntregaComponent } from './nota-entrega/nota-entrega.component';
import { DetalleEntregaComponent } from './detalle-entrega/detalle-entrega.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductorComponent } from './productor/productor.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetalleClienteComponent,
    NotfoundComponent,
    AboutComponent,
    NotaEntregaComponent,
    DetalleEntregaComponent,
    ClienteComponent,
    ProductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
