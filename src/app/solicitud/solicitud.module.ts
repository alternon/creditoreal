import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudComponent } from './solicitud.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { DomicilioPersonalComponent } from './domicilio-personal/domicilio-personal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CodigoVerificacionComponent, FormatTimePipe } from './codigo-verificacion/codigo-verificacion.component';
import { InfoLaboralComponent } from './/info-laboral/info-laboral.component';
import { DomicilioLaboralComponent } from './domicilio-laboral/domicilio-laboral.component';
import { ReferenciasComponent } from './referencias/referencias.component';

import { HeaderDarkModule } from '../headerdark/headerdark.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { TimerComponent } from '../timer/timer.component';
import { ConfirmarVerificacionComponent, FormatTimePipeConfirmar } from './confirmar-verificacion/confirmar-verificacion.component';
import { CotizacionService } from '../servicios/cotizacion.service';
import { FocusDirective } from '../directives/auto-focus-input.directive';

@NgModule({
  declarations: [
    SolicitudComponent,
    InfoPersonalComponent,
    DomicilioPersonalComponent,
    ContactoComponent,
    CodigoVerificacionComponent,
    InfoLaboralComponent,
    DomicilioLaboralComponent,
    ReferenciasComponent,
    TimerComponent,
    FormatTimePipe,
    ConfirmarVerificacionComponent,
    FormatTimePipeConfirmar,
    FocusDirective
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    HeaderDarkModule,
    HttpClientModule
  ],
  providers: [
    CurrencyPipe,
    CotizacionService
  ]
})
export class SolicitudModule { }
