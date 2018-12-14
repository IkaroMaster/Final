import { Component, OnInit } from '@angular/core';
import {TitleService} from '../servicios/title.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { Cliente, Factura } from '../models';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {

  constructor(
    private ds:DataService,
    private ar:ActivatedRoute,
    private l:Location,
    private ts: TitleService
    ) { }

    cliente:Cliente;
    clientes:Cliente[];
    facturas:Factura[];

  ngOnInit() {
    this.detalleCliente();
    this.obtenerClienteFacturas();
    this.ts.setTitle('Editar Cliente');
    //this.obtenerClientes();
  }

  detalleCliente()
  {
     const id = +this.ar.snapshot.paramMap.get('id');
     this.ds.verDetalleCliente(id).subscribe(c => this.cliente = c);
  }

  obtenerClienteFacturas()
  {
    const id = +this.ar.snapshot.paramMap.get('id');
    this.ds.obtenerClienteFacturas(id).subscribe(i => this.facturas = i);
  }

  // obtenerFacturas()
  // {
  //   this.ds.obtenerFacturas().subscribe(i =>{
  //     const id = +this.ar.snapshot.paramMap.get('id');
  //     this.facturas = i;
  //     //this.facturas.filter(f => i == this.cliente.id)
  //     // i.forEach(item => {
  //     //   this.facturas.filter(item =>item.cliente ==id );
  //     // });
      
  //   });

    
    
  // }
  // obtenerClientes()
  // {
  //   this.ds.obtenerClientes().subscribe(i =>this.clientes = i);
  // }

  actualizarCliente()
  {
    this.ds.actualizarCliente(this.cliente).subscribe();
    alert(`${this.cliente.nombre} ${this.cliente.apellido} actualizado! `);
    this.l.back();
  }

  volver()
  {
    this.l.back();
  }

}
