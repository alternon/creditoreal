import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

import { CotizacionRoutingModule } from './cotizacion-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderDarkModule } from '../headerdark/headerdark.module';
import { CotizacionComponent } from './cotizacion.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { PlazoComponent } from './plazo/plazo.component';
import { SeguroComponent } from './seguro/seguro.component';

import { CotizacionService } from '../servicios/cotizacion.service';
import { AllowDecimalNumberDirective } from '../directives/allow-decimal.directive';

@NgModule({
  declarations: [
    CotizacionComponent,
    CotizadorComponent,
    PlazoComponent,
    SeguroComponent,
    AllowDecimalNumberDirective
  ],
  imports: [
    CommonModule,
    CotizacionRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderDarkModule,
    HttpClientModule
  ],
  providers: [
    CurrencyPipe,
    CotizacionService
  ]
})
export class CotizacionModule { }
