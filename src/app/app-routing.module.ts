import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarfacturaComponent } from './components/registrarfactura/registrarfactura.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'facturacion',
    component: RegistrarfacturaComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
