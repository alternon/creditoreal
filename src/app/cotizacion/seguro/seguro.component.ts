import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CotizacionService } from '../../servicios/cotizacion.service';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.scss']
})
export class SeguroComponent implements OnInit {

  disable = true;

  enviarDatos (): void {
    if (this.disable) {
      this.disable = !this.disable;
    }
  }

  obtenerDato(valor) {
    this.detallesService.seguro$.emit(valor.value);
    console.log("Seguro: " + valor.value);
  }

  irPlazo (): void {
    this.router.navigate(['./cotizacion/plazo']);
  }

  regresar (): void {
    this.router.navigate(['./cotizacion/cotizador']);
  }

  constructor(private router:Router, private detallesService: CotizacionService) { }

  ngOnInit() {
  }

}
