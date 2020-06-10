import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter} from '@angular/material/core';
import { CotizacionService } from '../../servicios/cotizacion.service';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.scss']
})
export class InfoPersonalComponent implements OnInit {
  @Input() stepper: MatStepper;
  informacionPersonalForm: FormGroup;

  minDate: Date;
  maxDate: Date;
  datos: object = new Object();
  datosInfoPersonal(): void {
    this.datos = [
      {
        "nombre": this.informacionPersonalForm.controls.nombre.value
      },
      {
        "primerApellido": this.informacionPersonalForm.controls.primerApellido.value
      },
      {
        "segundoApellido": this.informacionPersonalForm.controls.segundoApellido.value
      },
      {
        "fechaNacimiento": this.informacionPersonalForm.controls.fechaNacimiento.value
      },
      {
        "rfc": this.informacionPersonalForm.controls.rfc.value
      },
      {
        "homoclave": this.informacionPersonalForm.controls.homoclave.value
      }
    ]

    this.resumen.nombre$.emit(this.informacionPersonalForm.controls.nombre.value);
    this.resumen.rfc$.emit(this.informacionPersonalForm.controls.rfc.value);
    console.log(this.datos);
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    public resumen: CotizacionService
    ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    
    this.minDate = new Date(currentYear-100, currentMonth, currentDay);
    this.maxDate = new Date(currentYear-18, currentMonth, currentDay);
  }

  ngOnInit() {
    this._adapter.setLocale('mx');
    this.informacionPersonalForm = this._formBuilder.group({
      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      rfc: ['', Validators.required],
      homoclave: ['']
    });
  }

}
