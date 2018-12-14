import { Component, OnInit } from '@angular/core';
import {DataService} from '../servicios/data.service';
import {TitleService} from '../servicios/title.service';
import { from } from 'rxjs';
import { Factura,Cliente,TotalLeche } from "../models";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private ds: DataService,
    private ts: TitleService

    ) { }

  facturas: Factura[];
  clientes: Cliente[];
  factura: Factura;
  totalLeche: TotalLeche; 
  totalL:number = 0;
  cliente: Cliente;

  ngOnInit() {
    this.obtenerTotalLeche();
    this.obtenerFacturas();
    this.obtenerClientes();
    this.ts.setTitle('Factura');
    
    
  }
  obtenerTotalLeche()
  {
    this.ds.obtenerTotalLeche().subscribe(i=>{
      this.totalLeche = i;
      this.totalL = +this.totalLeche.totalLeche;
      console.log(this.totalLeche);
    });
  }
 

  // ----------------------Facturas
  obtenerFacturas()
  {
    this.ds.obtenerFacturas().subscribe(i =>{
      this.facturas = i;
      // i.forEach(item => {
      //   this.totalL += +item.cantidad;
      // });
    });
  }
  public guardarFactura(cliente:number,cantidad:number,precio:number)
  {
    

    if (!cliente || !cantidad || !precio) return;
    if (cantidad > this.totalL)
    {
      let i = cantidad - this.totalL; 
      return alert(`Faltan ${i} Litros de leche para poder realizar la venta`);
    }else{
      this.factura = new Factura(0,cliente,cantidad,precio);
      this.ds.guardarFactura(this.factura).subscribe(i => {
        this.facturas.push(i)

        this.totalLeche.id = 2;
        this.totalLeche.totalLeche = +this.totalL-(+i.cantidad);
        this.ds.guardarTotalLeche(this.totalLeche).subscribe();
        this.totalL = this.totalLeche.totalLeche;

      });
    }
    
    // this.obtenerTotalLeche();
    

  }
  eliminarFactura(f: Factura)
  {
    if (!confirm(`Confirma eliminar la factura #-${f.id}`)) return false;

    this.ds.eliminarFactura(f).subscribe();
    this.facturas = this.facturas.filter(h =>h !== f);
    this.totalL += +f.cantidad;
    this.actualizarTotalLeche(this.totalL);

  }

  actualizarTotalLeche(tl: number)
  {
    this.totalLeche.id = 2;
    this.totalLeche.totalLeche = tl;
    this.ds.guardarTotalLeche(this.totalLeche).subscribe();
    this.totalL = this.totalLeche.totalLeche;

  }
  // -----------------------Clientes
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
