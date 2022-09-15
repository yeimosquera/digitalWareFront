import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  urlBase = 'https://localhost:7022/api'

  constructor(private http: HttpClient) { }

  //Obtener todas las facturas
  getFacturas(): Observable<any[]> {
    return this.http.get<any>(this.urlBase + '/Factura');
  }

  //Obtener todos los clientes
  getClientes(): Observable<any[]> {
    return this.http.get<any>(this.urlBase + '/Cliente');
  }

  //Obtener todos los productos
  getProductos(): Observable<any[]> {
    return this.http.get<any>(this.urlBase + '/Producto');
  }

  //Crear una factura emcabezado
  addFactura(data: any): Observable<any> {
    return this.http.post(this.urlBase + '/Factura', data);
  }

  //Crear detalle de una factura
  addfacturaDetalle(data: any) {
    return this.http.post(this.urlBase + '/DetalleFactura', data);
  }

  //Actualizar detalle de una factura
  updatefacturaDetalle(id: string | number, data: any) {
    return this.http.post(this.urlBase + `/DetalleFactura/${id}`, data);
  }

  //Eliminar una factura
  delecteFactura(id: string | number) {
    return this.http.delete(this.urlBase + + `/DetalleFactura/${id}`)
  }

  getUnProducto(id: string | number): Observable<any> {
    return this.http.get(this.urlBase + `/Producto/${id}`)
  }



}
