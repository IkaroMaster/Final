import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent }from './inicio/inicio.component';
import {DetalleClienteComponent} from './detalle-cliente/detalle-cliente.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'detalle-cliente/:id', component: DetalleClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
