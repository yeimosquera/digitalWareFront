import { Component, OnInit } from '@angular/core';
import { FacturacionService } from 'src/app/services/facturacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: FacturacionService) { }

  ngOnInit(): void {
    this.service.getFacturas().subscribe(res => {
      console.log(res);

    });
  }

}
