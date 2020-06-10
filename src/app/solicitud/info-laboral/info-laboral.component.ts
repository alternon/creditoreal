import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface mesesAntiguedad {
  value: string;
}

export interface ocupacion {
  value: string;
}

@Component({
  selector: 'app-info-laboral',
  templateUrl: './info-laboral.component.html',
  styleUrls: ['./info-laboral.component.scss']
})
export class InfoLaboralComponent implements OnInit {

  informacionLaboralForm: FormGroup;

  meses: mesesAntiguedad[] = [
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

  ocupaciones: ocupacion[] = [
    {value: 'Estudiante'},
    {value: 'Profesionista'},
    {value: 'Ama de Casa'}
  ];
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.informacionLaboralForm = this._formBuilder.group({
      ocupacion: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      ingresos: ['', Validators.required],
      anosAntiguedad: ['', Validators.required],
      mesesAntiguedad: ['', Validators.required]
    });
  }

}
