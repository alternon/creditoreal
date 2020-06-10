import { Component, OnInit, HostBinding, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { CotizacionService } from '../../servicios/cotizacion.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.block-campos', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class CotizadorComponent implements OnInit {
  @HostBinding('@pageAnimations')

  @Output() datoCotizador = new EventEmitter<string>();
  sendCostoAuto;
  sendEnganche;
  costoAutoDefaultInput;
  engancheDefaultInput;
  cotizadorForm: FormGroup;
  costoAutoDefault: number = 0;
  engancheDefault: number = 0;
  edituser: string;
  marcas: any;
  modelos: any;
  anos: any;
  versions: any;

  datos: object = new Object();
  datosCotizador(): void {
    this.datos = [
      {
        "costoAuto": this.cotizadorForm.controls.costoAuto.value
      },
      {
        "enganche": this.cotizadorForm.controls.enganche.value
      },
      {
        "marca": this.cotizadorForm.controls.marca.value
      },
      {
        "modelo": this.cotizadorForm.controls.modelo.value
      },
      {
        "ano": this.cotizadorForm.controls.ano.value
      },
      {
        "version": this.cotizadorForm.controls.version.value
      },
      {
        "codigoPostal": this.cotizadorForm.controls.codigoPostal.value
      },
      {
        "compruebaIngresos": this.cotizadorForm.controls.compruebaIngresos.value
      },
      {
        "compruebaIngresos": this.cotizadorForm.controls.historialCrediticio.value
      }
    ]
    this.sendCostoAuto = parseFloat(this.datos[0].costoAuto.replace(/,/g,""));
    this.detallesService.costoAuto$.emit(this.sendCostoAuto);
    this.sendEnganche = parseFloat(this.datos[1].enganche.replace(/,/g,""));
    this.detallesService.costoEnganche$.emit(this.sendEnganche);
    console.log(this.datos);
    this.router.navigate(['./cotizacion/seguro']);

    
  }

  constructor(
    private _formBuilder: FormBuilder,
    private router:Router,
    private detallesService: CotizacionService,
    private currencyPipe : CurrencyPipe
  ) { }

  transformTotalCostoAuto() {
    const value = this.cotizadorForm.controls.costoAuto.value;
    this.cotizadorForm.controls.costoAuto.setValue(
      this.formatMoney(value.replace(/\,/g, "")), 
      {emitEvent: false}
    );
  }

  transformTotalEnganche() {
    const value = this.cotizadorForm.controls.enganche.value;
    this.cotizadorForm.controls.enganche.setValue(
      this.formatMoney(value.replace(/\,/g, "")), 
      {emitEvent: false}
    );
  }

  formatMoney(value) {
    const temp = `${value}`.replace(/\,/g, "");
    return this.currencyPipe.transform(temp).replace("$", "");
  }

  obtenerDatosJson() {
    this.detallesService.datosJson()
      .subscribe(
        data => {
          this.marcas = data;
          console.log(this.marcas);
          this.modelos = data[0].modelos;
          this.anos = data[0].anos;
          this.versions = data[0].version;
          console.log(this.modelos);
          console.log(this.anos);
          console.log(this.versions);
        },
        error => {
          console.log(error);
        }
      );
  }

  regresar (): void {
    this.router.navigate(['./solicitudes']);
  }

  ngOnInit() {
    this.obtenerDatosJson();

    this.costoAutoDefaultInput = 0;
    this.engancheDefaultInput = 0;
    this.cotizadorForm = this._formBuilder.group({
      costoAuto: [this.formatMoney(this.costoAutoDefaultInput), Validators.required],
      enganche: [this.formatMoney(this.engancheDefaultInput), Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ano: ['', Validators.required],
      version: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5)]],
      compruebaIngresos:[''],
      historialCrediticio:['']
    });

    this.cotizadorForm.reset();
    this.detallesService.costoAuto$.emit(this.costoAutoDefault);
    this.detallesService.costoEnganche$.emit(this.engancheDefault);
  }

}
