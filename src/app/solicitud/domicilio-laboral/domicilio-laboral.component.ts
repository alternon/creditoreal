import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-domicilio-laboral',
  templateUrl: './domicilio-laboral.component.html',
  styleUrls: ['./domicilio-laboral.component.scss']
})
export class DomicilioLaboralComponent implements OnInit {

  domicilioLaboralForm: FormGroup;

  datos: object = new Object();
  datosDomicilioLaboral(): void {
    this.datos = [
      {
        "calle": this.domicilioLaboralForm.controls.calle.value
      },
      {
        "numeroExterior": this.domicilioLaboralForm.controls.numeroExterior.value
      },
      {
        "numeroInterior": this.domicilioLaboralForm.controls.numeroInterior.value
      },
      {
        "codigoPostal": this.domicilioLaboralForm.controls.codigoPostal.value
      },
      {
        "colonia": this.domicilioLaboralForm.controls.colonia.value
      },
      {
        "municipio": this.domicilioLaboralForm.controls.municipio.value
      },
      {
        "estado": this.domicilioLaboralForm.controls.estado.value
      }
    ]
    console.log(this.datos);
  }
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.domicilioLaboralForm = this._formBuilder.group({
      calle: ['', Validators.required],
      numeroExterior: ['', Validators.required],
      numeroInterior: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
      colonia: ['', Validators.required],
      municipio: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

}
