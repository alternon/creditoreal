import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'solicitudes', loadChildren: () => import('./solicitudes/solicitudes.module').then(m => m.SolicitudesModule)},
  { path: 'cotizacion', loadChildren: () => import('./cotizacion/cotizacion.module').then(m => m.CotizacionModule)},
  { path: 'solicitud', loadChildren: () => import('./solicitud/solicitud.module').then(m => m.SolicitudModule)  },
  { path: 'resumen', loadChildren: () => import('./resumen/resumen.module').then(m => m.ResumenModule)  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
