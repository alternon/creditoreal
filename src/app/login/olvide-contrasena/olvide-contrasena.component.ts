import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-olvide-contrasena',
  templateUrl: './olvide-contrasena.component.html',
  styleUrls: ['./olvide-contrasena.component.scss']
})
export class OlvideContrasenaComponent implements OnInit {

  olvideContrasenaForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,public router: Router) { 
    this.olvideContrasenaForm = this._formBuilder.group({
      usuario: ['', Validators.required]
    });
  }

  datos: object = new Object();
  obtenerDatos() {
    this.datos = [
      {
        "usuario": this.olvideContrasenaForm.controls.usuario.value
      },
    ]
    console.log(this.datos);

    this.olvideContrasenaForm.reset();
    this.router.navigate(['/login/cambiar-contrasena']);
  }
  ngOnInit() {
  }

}
