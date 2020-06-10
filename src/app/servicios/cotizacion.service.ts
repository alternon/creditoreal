import { Injectable, EventEmitter } from '@angular/core';
/* import { BehaviorSubject } from 'rxjs/BehaviorSubject' */
import { HttpClient } from '@angular/common/http';
/* import { EventEmitter } from 'protractor'; */

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  btncotizador$ = new EventEmitter<boolean>();

  costoAuto$ = new EventEmitter<number>();
  costoEnganche$ = new EventEmitter<number>();
  costoMensual$ = new EventEmitter<number>();
  mensualidades$ = new EventEmitter<number>();
  montoFinanciar$ = new EventEmitter<number>();
  seguro$ = new EventEmitter<number>();
  comision$ = new EventEmitter<number>();

  resumen$ = new EventEmitter<boolean>();

  nombre$ = new EventEmitter<string>();
  celular$ = new EventEmitter<number>();
  correo$ = new EventEmitter<string>();
  rfc$ = new EventEmitter<string>();
  
/* 
  private datos = new BehaviorSubject<number>(0);
  cast = this.datos.asObservable();
  
  private datos1 = new BehaviorSubject<number>(0);
  cast1 = this.datos1.asObservable(); */


  constructor(private http: HttpClient) { }
/* 
  actualizar (dato) {
    this.datos.next(dato);
  }

  actualizar1 (dato) {
    this.datos1.next(dato);
  } */

  datosJson() {
    return this.http.get("../assets/json/models.json");
  }
}
