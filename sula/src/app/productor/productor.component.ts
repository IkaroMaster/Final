import { Component, OnInit } from '@angular/core';
import {TitleService} from '../servicios/title.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../servicios/data.service';
import { Productor, NotaEntrega } from '../models';
import { Location } from '@angular/common';
@Component({
  selector: 'app-productor',
  templateUrl: './productor.component.html',
  styleUrls: ['./productor.component.css']
})
export class ProductorComponent implements OnInit {

  constructor(
  	private ds:DataService,
    private ar:ActivatedRoute,
    private l:Location,
    private ts: TitleService

  	) { }
  productores: Productor[];
  productor: Productor;
	ngOnInit() {
	    this.ts.setTitle('Productor');
	    this.obtenerProductores();
	  }

  obtenerProductores()
  {
    this.ds.obtenerProductor().subscribe(i =>this.productores = i);
  }

  guardarProductor(nombre: string, apellido: string)
  {
    nombre = nombre.trim();
    apellido = apellido.trim();
    

    if (!nombre || !apellido) return;

    
    this.productor = new Productor(0, nombre, apellido);

    this.ds.guardarProductor(this.productor).subscribe(c => {
      this.productores.push(c)
      console.log(this.productores);
    });
    
  }

}
