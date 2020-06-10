import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginMainComponent } from './login/login.component';
import { OlvideContrasenaComponent } from './olvide-contrasena/olvide-contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';

const routes: Routes = [
  {path: '', component: LoginComponent, 
    children: [
      {path: 'login', component: LoginMainComponent},
      {path: 'olvide-contrasena', component: OlvideContrasenaComponent},
      {path: 'cambiar-contrasena', component: CambiarContrasenaComponent},
      {path: '', redirectTo: 'login', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
