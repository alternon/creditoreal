import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
/* import { CotizacionService } from '../../servicios/cotizacion.service'; */

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  @Input() statusResumen:boolean;

  costoAuto:number = 0;
  enganche:number = 0;
  costoMensual:number = 0;
  mensualidades:number = 0;
  montoFinanciar:number = 0;
  seguro:number = 0;
  comision:number = 0;

  nombre:string='nombre';
  celular:number=0;
  correo:string='correo@correo.com';
  rfc:string='rfc';
/*   resumen: boolean = false; */

  constructor(
/*     public resumenDetalles: CotizacionService */
  ) { }



  ngOnInit() {
    /*     this.resumenDetalles.nombre$.subscribe(nombre=> this.nombre = nombre);
    this.resumenDetalles.celular$.subscribe(celular=> this.celular = celular);
    this.resumenDetalles.correo$.subscribe(correo=> this.correo = correo);
    this.resumenDetalles.rfc$.subscribe(rfc=> this.rfc = rfc);
    this.resumenDetalles.resumen$.subscribe(status=> this.resumen = status);
    this.resumenDetalles.resumen$.subscribe(status=> this.resumen = status);*/
  }

  ngOnDestroy() {
    /*     this.resumenDetalles.costoAuto$.unsubscribe();
        this.resumenDetalles.costoEnganche$.unsubscribe();
        this.resumenDetalles.btncotizador$.unsubscribe();
        this.resumenDetalles.costoMensual$.unsubscribe();
        this.resumenDetalles.mensualidades$.unsubscribe();
        this.resumenDetalles.montoFinanciar$.unsubscribe();
        this.resumenDetalles.seguro$.unsubscribe();
        this.resumenDetalles.comision$.unsubscribe();
        
        this.resumenDetalles.nombre$.unsubscribe();
        this.resumenDetalles.celular$.unsubscribe();
        this.resumenDetalles.correo$.unsubscribe();
        this.resumenDetalles.rfc$.unsubscribe();
        this.resumenDetalles.resumen$.unsubscribe(); 
        this.resumenDetalles.resumen$.unsubscribe();*/
    
    }

}
