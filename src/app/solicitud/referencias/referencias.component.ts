import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CotizacionService } from '../../servicios/cotizacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.scss']
})
export class ReferenciasComponent implements OnInit {

  referenciasForm: FormGroup;
  datos: object = new Object();
  
  constructor(
    private _formBuilder: FormBuilder,
    public router: Router
/*     public resumenStatus: CotizacionService */
  ) { }


  resumen() {
    this.datos = [
      {
        "nombreReferencia1": this.referenciasForm.controls.nombreReferencia1.value
      },
      {
        "telefonoReferencia1": this.referenciasForm.controls.telefonoReferencia1.value
      },
      {
        "nombreReferencia2": this.referenciasForm.controls.nombreReferencia2.value
      },
      {
        "telefonoReferencia2": this.referenciasForm.controls.telefonoReferencia2.value
      },
      {
        "nombreReferencia3": this.referenciasForm.controls.nombreReferencia3.value
      },
      {
        "telefonoReferencia3": this.referenciasForm.controls.telefonoReferencia3.value
      }
    ]
    console.log(this.datos);

    this.router.navigate(['/resumen']);
  }

  ngOnInit() {
/*     this.resumenStatus.resumen$.subscribe(status=> this.resumenEstado = status); */

    this.referenciasForm = this._formBuilder.group({
      nombreReferencia1: ['', [Validators.required, Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]],
      telefonoReferencia1: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      nombreReferencia2: ['', [Validators.required, Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]],
      telefonoReferencia2: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      nombreReferencia3: ['', [Validators.required, Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]],
      telefonoReferencia3: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

}
