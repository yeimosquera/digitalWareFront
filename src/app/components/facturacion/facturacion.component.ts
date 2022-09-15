import { Component, OnInit } from '@angular/core';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})

export class FacturacionComponent implements OnInit {
  dataSource: any = {};
  constructor(private service: FacturacionService) {
  }

  ngOnInit() {
    this.service.getFacturas().subscribe(res => {
      this.dataSource = res;
    });
  }


}
