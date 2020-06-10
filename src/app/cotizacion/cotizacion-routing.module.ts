import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionComponent } from './cotizacion.component'
import { CotizadorComponent } from './cotizador/cotizador.component';
import { PlazoComponent } from './plazo/plazo.component';
import { SeguroComponent } from './seguro/seguro.component';

const routes: Routes = [
  {path: '', component: CotizacionComponent, 
    children: [
      {path: 'cotizador', component: CotizadorComponent},
      {path: 'seguro', component: SeguroComponent},
      {path: 'plazo', component: PlazoComponent},
      {path: '', redirectTo: 'cotizador', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionRoutingModule { }
