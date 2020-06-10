import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CotizacionService } from '../../servicios/cotizacion.service';

export interface Plazo {
  financiadoMonto: Number;
  contadoMonto: Number;
  meses: Number;
}

@Component({
  selector: 'app-plazo',
  templateUrl: './plazo.component.html',
  styleUrls: ['./plazo.component.scss']
})
export class PlazoComponent implements OnInit {

  montoFinanciar: number = 150000;
  comision: number = this.montoFinanciar * 0.03;

  disable = true;
  
  plazos: Plazo[] = [
    {
      financiadoMonto: 11000.10,
      contadoMonto: 11500.10,
      meses: 12
    },
    {
      financiadoMonto: 12000.20,
      contadoMonto: 12500.20,
      meses: 24
    },
    {
      financiadoMonto: 13000.30,
      contadoMonto: 13500.30,
      meses: 36
    },
    {
      financiadoMonto: 14000.40,
      contadoMonto: 14500.40,
      meses: 48
    },
    {
      financiadoMonto: 15000.50,
      contadoMonto: 15500.50,
      meses: 60
    }
  ];

  regresar (): void {
    this.router.navigate(['./cotizacion/seguro']);
    this.costoAutoService.btncotizador$.emit(false);
  }

  enviarDatos (value) {
    if (this.disable) {
      this.disable = !this.disable;
    }
    console.log(value);
    this.costoAutoService.btncotizador$.emit(true);
    this.costoAutoService.costoMensual$.emit(value.financiadoMonto);
    this.costoAutoService.mensualidades$.emit(value.meses);
  }

  irSolicitud(): void {
    this.router.navigate(['./solicitud']);
  }



  constructor(private router:Router, public costoAutoService: CotizacionService) {
    
  }

  ngOnInit() {
    this.costoAutoService.btncotizador$.emit(false);
    this.costoAutoService.montoFinanciar$.emit(this.montoFinanciar);
    this.costoAutoService.comision$.emit(this.comision);
  }

}
