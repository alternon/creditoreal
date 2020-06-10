import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoadingService } from '../../servicios/loading/loading.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginMainComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,public router: Router, public loading: LoadingService) { 
    this.loginForm = this._formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      recordarContrasena: ['',Validators.nullValidator]
    });
  }

  datos: object = new Object();
  obtenerDatos() {
    this.datos = [
      {
        "usuario": this.loginForm.controls.usuario.value
      },
      {
        "contrasena": this.loginForm.controls.contrasena.value
      },
      {
        "recordarContrasena": this.loginForm.controls.recordarContrasena.value
      }
    ]
    console.log(this.datos);

    this.loginForm.reset();

    this.loading.startLoading();

    setTimeout(()=>{ 
      this.loading.stopLoading();
      this.router.navigate(['/solicitudes']);
    },2000);

  }

  ngOnInit() {

    
  }

}
