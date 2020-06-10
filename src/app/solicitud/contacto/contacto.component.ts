import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CotizacionService } from '../../servicios/cotizacion.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  datos: object = new Object();
  datosContacto(): void {
    this.datos = [
      {
        "celular": this.contactoForm.controls.celular.value
      },
      {
        "confirmarCelular": this.contactoForm.controls.confirmarCelular.value
      },
      {
        "telefonoFijo": this.contactoForm.controls.telefonoFijo.value
      },
      {
        "correo": this.contactoForm.controls.correo.value
      }
    ]
    this.resumen.celular$.emit(this.contactoForm.controls.celular.value);
    this.resumen.correo$.emit(this.contactoForm.controls.correo.value);
    console.log(this.datos);
  }

  constructor(private _formBuilder: FormBuilder, public resumen:CotizacionService) { }

  ngOnInit() {
    this.contactoForm = this._formBuilder.group({
      celular: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      confirmarCelular: ['',Validators.required],
      telefonoFijo: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      correo: ['', [Validators.required, Validators.email]]
    },
    {
      validator: this.checkCelular
    });
  }

  checkCelular(contactoForm: FormGroup) { 
    let celular = contactoForm.controls.celular.value;
    let confirmarCelular = contactoForm.controls.confirmarCelular.value;
    return celular === confirmarCelular ? null : { notSame: true }
  }

}
