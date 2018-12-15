import { Component, OnInit } from '@angular/core';
import {TitleService} from '../servicios/title.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { Cliente, Factura } from '../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private ds:DataService,
    private ar:ActivatedRoute,
    private l:Location,
    private ts: TitleService
  ) { }

  clientes: Cliente[];
  cliente: Cliente;

  ngOnInit() {
    this.ts.setTitle('Cliente');
    this.obtenerClientes();
  }

  obtenerClientes()
  {
    this.ds.obtenerClientes().subscribe(i =>this.clientes = i);
  }

  guardarCliente(nombre: string, apellido: string)
  {
    nombre = nombre.trim();
    apellido = apellido.trim();
    

    if (!nombre || !apellido) return;

    
    this.cliente = new Cliente(0, nombre, apellido);

    this.ds.guardarCliente(this.cliente).subscribe(c => {
      this.clientes.push(c)
      console.log(this.clientes);
    });
    
  }

}
