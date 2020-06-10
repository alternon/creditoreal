import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesComponent } from './solicitudes.component';
import { HomeComponent } from './home/home.component';
import { EstatusComponent } from './estatus/estatus.component';

const routes: Routes = [
  {path: '', component: SolicitudesComponent, 
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'estatus', component: EstatusComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
