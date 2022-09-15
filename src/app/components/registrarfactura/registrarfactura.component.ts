import { Component, OnInit } from '@angular/core';
import { FacturacionService } from 'src/app/services/facturacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrarfactura',
  templateUrl: './registrarfactura.component.html',
  styleUrls: ['./registrarfactura.component.css']
})
export class RegistrarfacturaComponent implements OnInit {

  clientes: any[] = [];
  productos: any[] = [];
  idClietes: any[] = [];
  idProductos: any[] = [];
  precioTotal!: number;
  cliente!: number;
  producto!: number;
  cantidad!: number;
  precioUnitario!: number

  constructor(private service: FacturacionService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
    this.llenarCombos();
  }

  llenarCombos() {

    //Cargar los clientes
    this.service.getClientes().subscribe(res => {
      this.clientes = res;
    });

    //Cargar los productos
    this.service.getProductos().subscribe(res => {
      this.productos = res;
    });
  }


  //Calcular precio total
  calcularPrecio() {
    if ((this.producto || this.producto > 0) && this.cantidad > 0) {
      this.service.getUnProducto(this.producto).subscribe(res => {
        this.precioTotal = (res.precio * this.cantidad);
        this.precioUnitario = res.precio;
      })
    }
  }

  //Crear factura Encabezado
  crarFactura() {
    var hoy = new Date();
    var factura = {
      fecha: hoy.toISOString(),
      fK_IdCliente: this.cliente
    }

    //Crear Factura detalle
    this.service.addFactura(factura).subscribe(res => {
      var detallefactura = {
        cantidad: this.cantidad,
        fK_IdFactura: res.pK_IdFactura,
        fK_IdProducto: this.producto
      }

      this.service.addfacturaDetalle(detallefactura).subscribe(res => {
        this.router.navigate(['/']);
      })
    });

  }

  //Inicializar propiedades del formulario
  initForm() {
    this.cliente = 0;
    this.producto = 0;
    this.precioTotal = 0;
    this.cantidad = 1
    this.precioUnitario = 0
  }


}
