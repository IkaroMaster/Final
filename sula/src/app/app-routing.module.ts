import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent }from './inicio/inicio.component';
import {DetalleClienteComponent} from './detalle-cliente/detalle-cliente.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { NotaEntregaComponent } from './nota-entrega/nota-entrega.component';
import {DetalleEntregaComponent} from './detalle-entrega/detalle-entrega.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detalle-cliente/:id', component: DetalleClienteComponent},
  {path: 'detalle-entrega/:id', component: DetalleEntregaComponent},
  {path: 'notaEntrega', component: NotaEntregaComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
