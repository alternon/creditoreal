import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDarkComponent } from './headerdark.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [
    HeaderDarkComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderDarkComponent
  ]
})
export class HeaderDarkModule { }
