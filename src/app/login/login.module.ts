import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginMainComponent } from './login/login.component';
import { OlvideContrasenaComponent } from './olvide-contrasena/olvide-contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';

import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../servicios/loading/loading.service';

@NgModule({
  declarations: [
    LoginComponent,
    LoginMainComponent,
    OlvideContrasenaComponent,
    CambiarContrasenaComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  providers: [
    LoadingService
  ]
})
export class LoginModule { }
