import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit, OnDestroy  {

  isLinear = true;
  editable = true;
  progresValue:number;
  selectedIndex = 0;
  resumen: boolean = true;
  statusLogin:boolean = true

  nombre:string = '';
  celular:number = 0;
  correo:string = '';
  rfc:string = '';

  statusResumen:boolean = false;

  constructor(private _formBuilder: FormBuilder) {
    
  }
  
  public selectionChange($event?: StepperSelectionEvent): void {
    console.log('stepper.selectedIndex: ' + this.selectedIndex 
        + '; $event.selectedIndex: ' + $event.selectedIndex);
        this.progresValue = ($event.selectedIndex * 100) / 7;
    if ($event.selectedIndex == 0) return;

    this.selectedIndex = $event.selectedIndex;
  }


  ngOnInit() {

  }

  ngOnDestroy() {


  }

}


