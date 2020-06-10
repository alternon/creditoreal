import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ResumenRoutingModule } from './resumen-routing.module';
import { HeaderDarkModule } from '../headerdark/headerdark.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumenHomeComponent, ModalAceptadaComponent, ModalRechazadaComponent } from './resumen/resumen.component';
import { ResumenComponent } from './resumen.component';
import { CotizacionService } from '../servicios/cotizacion.service';

@NgModule({
  declarations: [
    ModalAceptadaComponent,
    ModalRechazadaComponent,
    ResumenComponent,
    ResumenHomeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderDarkModule,
    ResumenRoutingModule,
    HttpClientModule
  ],
  providers: [
    CurrencyPipe,
    CotizacionService
  ], 
  entryComponents: [ModalAceptadaComponent,ModalRechazadaComponent]
})
export class ResumenModule { }
