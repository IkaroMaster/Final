import { Component, OnInit } from '@angular/core';
import {TitleService} from '../servicios/title.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { Productor, NotaEntrega } from '../models';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detalle-entrega',
  templateUrl: './detalle-entrega.component.html',
  styleUrls: ['./detalle-entrega.component.css']
})
export class DetalleEntregaComponent implements OnInit {

  constructor(
  	private ds:DataService,
    private ar:ActivatedRoute,
    private l:Location,
    private ts: TitleService

  	) { }

    productor:Productor;
    clientes:Productor[];
    notaEntregas:NotaEntrega[];

  ngOnInit() {
  	this.detalleProductor();
    this.obtenerProductorNotaEntrega();
    this.ts.setTitle('Editar Productor');
  }

   detalleProductor()
  {
     const id = +this.ar.snapshot.paramMap.get('id');
     this.ds.verDetalleProductor(id).subscribe(c => this.productor = c);
  }

  obtenerProductorNotaEntrega()
  {
    const id = +this.ar.snapshot.paramMap.get('id');
    this.ds.obtenerProductorNotaEntrega(id).subscribe(i => this.notaEntregas = i);
  }
  actualizarProductor()
  {
    this.ds.actualizarProductor(this.productor).subscribe();
    alert(`${this.productor.nombre} ${this.productor.apellido} actualizado! `);
    this.l.back();
  }

  volver()
  {
    this.l.back();
  }

}
