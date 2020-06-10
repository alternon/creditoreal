import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-codigo-verificacion',
  templateUrl: './codigo-verificacion.component.html',
  styleUrls: ['./codigo-verificacion.component.scss']
})
export class CodigoVerificacionComponent implements OnInit {

  telefono: string = '+52 1 5566306891';

  minutes: number;
  seconds: number;

  verificacionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.resetTimer();
    setInterval(() => this.thick(),1000);
  }

  resetTimer(): void {
    this.minutes = 3;
    this.seconds = 59;
  }

  private thick(): void {
    if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
        this.resetTimer();
      }
    }
  }

  confirmarCodigo(): void {
    this.verificacionForm.reset();
    this.resetTimer();
  }

  reset(): void {
    this.verificacionForm.reset();
  }

  ngOnInit() {
    this.verificacionForm = this._formBuilder.group({
      verCamp1: ['', Validators.required],
      verCamp2: ['', Validators.required],
      verCamp3: ['', Validators.required],
      verCamp4: ['', Validators.required],
      verCamp5: ['', Validators.required],
      verCamp6: ['', Validators.required],
      terminos: ['', Validators.required]
    });

  }

}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

}