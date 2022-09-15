import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DxButtonModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { DxDataGridModule } from 'devextreme-angular';
import { RegistrarfacturaComponent } from './components/registrarfactura/registrarfactura.component';
import { DxFormModule, DxSelectBoxModule, DxFormComponent, DxTextAreaModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FacturacionComponent,
    RegistrarfacturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
