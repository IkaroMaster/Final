import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Factura,TotalLeche,NotaEntrega,Productor } from '../models';


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
    // -----------------Nota Entrega

  obtenerNotaEntrega():Observable<NotaEntrega[]>
  {
    return this.http.get<NotaEntrega[]>(`${this.url}/notaEntregas/`);
  } 

  public guardarNotaEntrega(f: NotaEntrega):Observable<NotaEntrega>
  {
    return this.http.post<NotaEntrega>(`${this.url}/notaEntregas/`,f,httpOptions);
  }
  
  eliminarNotaEntrega(f: NotaEntrega)
  {
    return this.http.delete(`${this.url}/notaEntrega/${f.id}/eliminar/`, httpOptions)
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

  guardarCliente(c: Cliente): Observable<Cliente>
  {
    return this.http.post<Cliente>(`${this.url}/clientes/`, c, httpOptions);
  }

  actualizarCliente(cli: Cliente): Observable<Cliente>
  {
    return this.http.put<Cliente>(`${this.url}/cliente/${cli.id}/`, cli, httpOptions);
  }

  obtenerClienteFacturas(id: number): Observable<Factura[]>
  {
    return this.http.get<Factura[]>(`${this.url}/cliente/${id}/facturas/`);
  }
  //------------------Productor

  obtenerProductor():Observable<Productor[]>
  {
    return this.http.get<Productor[]>(`${this.url}/productores/`);
  }

  verDetalleProductor(id: Number):Observable<Productor>
  {
    return this.http.get<Productor>(`${this.url}/productor/${id}`);
  }

  actualizarProductor(cli: Productor): Observable<Productor>
  {
    return this.http.put<Productor>(`${this.url}/productor/${cli.id}/`, cli, httpOptions);
  }

  obtenerProductorNotaEntrega(id: number): Observable<NotaEntrega[]>
  {
    return this.http.get<NotaEntrega[]>(`${this.url}/productor/${id}/notaentrega/`);
  }

  guardarProductor(p: Productor): Observable<Productor>
  {
    return this.http.post<Productor>(`${this.url}/productores/`, p, httpOptions);
  }


  
}
