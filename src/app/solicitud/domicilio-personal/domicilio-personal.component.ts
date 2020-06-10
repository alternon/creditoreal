import { Component, OnInit, Input  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';

export interface mesesResidencia {
  value: string;
}

@Component({
  selector: 'app-domicilio-personal',
  templateUrl: './domicilio-personal.component.html',
  styleUrls: ['./domicilio-personal.component.scss']
})
export class DomicilioPersonalComponent implements OnInit {
  @Input() stepper: MatStepper;
  domicilioPersonalForm: FormGroup;

  meses: mesesResidencia[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '7'},
    {value: '8'},
    {value: '9'},
    {value: '10'},
    {value: '11'}
  ];

  datos: object = new Object();
  datosDomicilioPersonal(): void {
    this.datos = [
      {
        "calle": this.domicilioPersonalForm.controls.calle.value
      },
      {
        "numeroExterior": this.domicilioPersonalForm.controls.numeroExterior.value
      },
      {
        "numeroInterior": this.domicilioPersonalForm.controls.numeroInterior.value
      },
      {
        "codigoPostal": this.domicilioPersonalForm.controls.codigoPostal.value
      },
      {
        "colonia": this.domicilioPersonalForm.controls.colonia.value
      },
      {
        "municipio": this.domicilioPersonalForm.controls.municipio.value
      },
      {
        "estado": this.domicilioPersonalForm.controls.estado.value
      },
      {
        "anosResidencia": this.domicilioPersonalForm.controls.anosResidencia.value
      },
      {
        "mesesResidencia": this.domicilioPersonalForm.controls.mesesResidencia.value
      }
    ]
    console.log(this.datos);
/*     this.stepper.next(); */
  }
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.domicilioPersonalForm = this._formBuilder.group({
      calle: ['', Validators.required],
      numeroExterior: ['', Validators.required],
      numeroInterior: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
      colonia: ['', Validators.required],
      municipio: ['', Validators.required],
      estado: ['', Validators.required],
      anosResidencia: ['', Validators.required],
      mesesResidencia: ['', Validators.required]
    });
  }

}
