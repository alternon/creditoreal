import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoadingService } from '../../servicios/loading/loading.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss']
})

export class CambiarContrasenaComponent implements OnInit {

  cambiarContrasenaForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder,public router: Router,public loading: LoadingService) { 
    this.cambiarContrasenaForm = this._formBuilder.group(
      {
        actualcontrasena: ['', Validators.required],
        nuevacontrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
        confirmarcontrasena: ['']
      },
      {
        validator: this.checkPasswords
      }
    );
  }

  datos: object = new Object();
  obtenerDatos() {
    this.datos = [
      {
        "actualcontrasena": this.cambiarContrasenaForm.controls.actualcontrasena.value
      },
      {
        "nuevacontrasena": this.cambiarContrasenaForm.controls.nuevacontrasena.value
      },
      {
        "confirmarcontrasena": this.cambiarContrasenaForm.controls.confirmarcontrasena.value
      }
    ]
    console.log(this.datos);

    this.cambiarContrasenaForm.reset();
    
    this.loading.startLoading();

    setTimeout(()=>{ 
      this.loading.stopLoading();
      this.router.navigate(['/login']);
    },2000);
  }

  checkPasswords(cambiarContrasenaForm: FormGroup) { 
    let pass = cambiarContrasenaForm.controls.nuevacontrasena.value;
    let confirmPass = cambiarContrasenaForm.controls.confirmarcontrasena.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  ngOnInit() {
  }

}
