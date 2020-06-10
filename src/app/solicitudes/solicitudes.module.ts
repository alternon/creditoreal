import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderDarkModule } from '../headerdark/headerdark.module';
import { EstatusComponent, ModalEstatusComponent } from './estatus/estatus.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HomeComponent } from './home/home.component';
import { SolicitudesComponent } from './solicitudes.component';

@NgModule({
    declarations: [
        EstatusComponent,
        ModalEstatusComponent,
        HomeComponent,
        SolicitudesComponent
    ],
    imports: [
        CommonModule,
        SolicitudesRoutingModule,
        AngularMaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderDarkModule,
        FileUploadModule,
        HttpClientModule
    ],
    entryComponents: [EstatusComponent, ModalEstatusComponent],
    bootstrap: [EstatusComponent]
})
export class SolicitudesModule { }