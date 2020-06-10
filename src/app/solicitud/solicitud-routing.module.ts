import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudComponent } from './solicitud.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { DomicilioPersonalComponent } from './domicilio-personal/domicilio-personal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CodigoVerificacionComponent } from './codigo-verificacion/codigo-verificacion.component';
import { InfoLaboralComponent } from './/info-laboral/info-laboral.component';
import { DomicilioLaboralComponent } from './domicilio-laboral/domicilio-laboral.component';
import { ReferenciasComponent } from './referencias/referencias.component';

const routes: Routes = [
  {
    path: '', component: SolicitudComponent, children: [
      {path: 'info-personal', component: InfoPersonalComponent},
      { path: 'domicilio-personal', component: DomicilioPersonalComponent},
      { path: 'contacto', component: ContactoComponent},
      { path: 'codigo-verificacion', component: CodigoVerificacionComponent},
      { path: 'info-laboral', component: InfoLaboralComponent},
      { path: 'domicilio-laboral', component: DomicilioLaboralComponent},
      { path: 'referencias', component: ReferenciasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
