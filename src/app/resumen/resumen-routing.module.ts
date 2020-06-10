import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumenHomeComponent } from './resumen/resumen.component';
import { ResumenComponent } from './resumen.component';

const routes: Routes = [
  {path: '', component: ResumenComponent, 
    children: [
      {path: 'home', component: ResumenHomeComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumenRoutingModule { }
