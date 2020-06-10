import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CotizacionService } from '../servicios/cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})

export class CotizacionComponent implements OnInit, OnDestroy {

  statusBtnCotizador: boolean = false;

  costoAuto:number = 0;
  enganche:number = 0;
  costoMensual:number = 0;
  mensualidades:number = 0;
  montoFinanciar:number = 0;
  seguro:number = 0;
  comision:number = 0;

  constructor(public costoAutoService: CotizacionService) {
  }

  ngOnInit() {
    this.costoAutoService.costoAuto$.subscribe(costoAuto=> this.costoAuto = costoAuto);
    this.costoAutoService.costoEnganche$.subscribe(enganche=> this.enganche = enganche);
    this.costoAutoService.btncotizador$.subscribe( status=>{
      this.statusBtnCotizador = status;
    });
    this.costoAutoService.costoMensual$.subscribe( costoMensual=>{
      this.costoMensual = costoMensual;
    });
    this.costoAutoService.mensualidades$.subscribe( mensualidades=>{
      this.mensualidades = mensualidades;
    });
    this.costoAutoService.montoFinanciar$.subscribe( montoFinanciar=>{
      this.montoFinanciar = montoFinanciar;
    });
    this.costoAutoService.seguro$.subscribe( seguro=>{
      this.seguro = seguro;
    });
    this.costoAutoService.comision$.subscribe( comision=>{
      this.comision = comision;
    });

  }

  ngOnDestroy() {

  }

}