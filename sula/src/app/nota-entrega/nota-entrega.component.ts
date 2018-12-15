import { Component, OnInit } from '@angular/core';
import {DataService} from '../servicios/data.service';
import {TitleService} from '../servicios/title.service';
import { from } from 'rxjs';
import { NotaEntrega,Productor,TotalLeche } from "../models";
@Component({
  selector: 'app-nota-entrega',
  templateUrl: './nota-entrega.component.html',
  styleUrls: ['./nota-entrega.component.css']
})
export class NotaEntregaComponent implements OnInit {

  constructor(
  	private ts: TitleService,
  	private ds: DataService,
  	) { }
  NotaEntregas: NotaEntrega[];
  productores: Productor[];
  productor: Productor;
  NotaEntrega: NotaEntrega;
  totalLeche: TotalLeche; 
  totalL:number = 0;

  ngOnInit() {
  	this.ts.setTitle('Nota de Entrega');
  	this.obtenerNotaEntregas();
    this.obtenerProductor();
    this.obtenerTotalLeche();
  }
    obtenerTotalLeche()
  {
    this.ds.obtenerTotalLeche().subscribe(i=>{
      this.totalLeche = i;
      this.totalL = +this.totalLeche.totalLeche;
    });
  }
 

  // ----------------------NotaEntregas
  obtenerNotaEntregas()
  {
    this.ds.obtenerNotaEntrega().subscribe(i =>{
      this.NotaEntregas = i;
      // i.forEach(item => {
      //   this.totalL += +item.cantidad;
      // });
    });
  }
  public guardarNotaEntrega(productor:number,cantidad:number,precio:number)
  {
    alert(`${productor} ${cantidad} ${precio}`);
    if (!productor || !cantidad || !precio) return;
    this.NotaEntrega = new NotaEntrega(0,productor,cantidad,precio);
    this.ds.guardarNotaEntrega(this.NotaEntrega).subscribe(i => {
      this.NotaEntregas.push(i)

      this.totalLeche.id = 2;
      this.totalLeche.totalLeche = +this.totalL+(+i.cantidad);
      this.ds.guardarTotalLeche(this.totalLeche).subscribe();
      this.totalL = this.totalLeche.totalLeche;
    });
    // this.obtenerTotalLeche();
    

  }
  eliminarNotaEntrega(f: NotaEntrega)
  {
    
    if(f.cantidad > this.totalL){
      let i = f.cantidad - this.totalL;
      alert(`imposible anular la nota de entrega #${f.id}. Faltan ${i} litros de leche para hacer la devolucion`);
      
    }else{
      if (!confirm(`Confirma eliminar la NotaEntrega #-${f.id}`)) return false;
      this.ds.eliminarNotaEntrega(f).subscribe();
      this.NotaEntregas = this.NotaEntregas.filter(h =>h !== f);
      this.totalL -= +f.cantidad;
      this.actualizarTotalLeche(this.totalL);

    }
    
  }

  actualizarTotalLeche(tl: number)
  {
    this.totalLeche.id = 2;
    this.totalLeche.totalLeche = tl;
    this.ds.guardarTotalLeche(this.totalLeche).subscribe();
    this.totalL = this.totalLeche.totalLeche;

  }
  // -----------------------Productor
  obtenerProductor()
  {
    this.ds.obtenerProductor().subscribe(i =>this.productores = i);
  }

  guardarProductor(nombre: string, apellido: string)
  {
    nombre = nombre.trim();
    apellido = apellido.trim();
    

    if (!nombre || !apellido) return;

    
    this.productor = new Productor(0, nombre, apellido);

    this.ds.guardarCliente(this.productor).subscribe(c => {
      this.productores.push(c)
      console.log(this.productores);
    });
    
  }

}
