import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Factura,TotalLeche } from '../models';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"})
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url: string ='http://127.0.0.1:8000/api';


  obtenerTotalLeche():Observable<TotalLeche>
  {
    return this.http.get<TotalLeche>(`${this.url}/total-leche/2/`);
  }
  guardarTotalLeche(tl:TotalLeche):Observable<TotalLeche>
  {
    return this.http.put<TotalLeche>(`${this.url}/total-leche/2/`,tl,httpOptions);
  }
  // -----------------Facturas

  obtenerFacturas():Observable<Factura[]>
  {
    return this.http.get<Factura[]>(`${this.url}/facturas/`);
  } 

  public guardarFactura(f: Factura):Observable<Factura>
  {
    return this.http.post<Factura>(`${this.url}/facturas/`,f,httpOptions);
  }
  
  eliminarFactura(f: Factura)
  {
    return this.http.delete(`${this.url}/factura/${f.id}/eliminar/`, httpOptions)
  }

  //------------------Clientes

  obtenerClientes():Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(`${this.url}/clientes/`);
  }

  verDetalleCliente(id: Number):Observable<Cliente>
  {
    return this.http.get<Cliente>(`${this.url}/cliente/${id}`);
  }

  actualizarCliente(cli: Cliente): Observable<Cliente>
  {
    return this.http.put<Cliente>(`${this.url}/cliente/${cli.id}/`, cli, httpOptions);
  }

  obtenerClienteFacturas(id: number): Observable<Factura[]>
  {
    return this.http.get<Factura[]>(`${this.url}/cliente/${id}/facturas/`);
  }

  
}
