import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { CotizacionService } from '../../servicios/cotizacion.service';

@Component({
  selector: 'app-resumen-home',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenHomeComponent implements OnInit {

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
    public dialog: MatDialog,
    public resumenDetalles: CotizacionService,
    private router:Router
  ) { }

  openModalAceptada(): void {
    const dialogRef = this.dialog.open(ModalAceptadaComponent, {
      width: '30vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openModalRechazada(): void {
    const dialogRef = this.dialog.open(ModalRechazadaComponent, {
      width: '30vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  regresar(): void {
    this.router.navigate(['/solicitud']);
  }

  enviarSolicitud(): void {
    this.openModalRechazada();
  }

  ngOnInit() {
    this.resumenDetalles.costoAuto$.subscribe(costoAuto=> this.costoAuto = costoAuto);
    this.resumenDetalles.costoEnganche$.subscribe(enganche=> this.enganche = enganche);
    this.resumenDetalles.costoMensual$.subscribe( costoMensual=>{
      this.costoMensual = costoMensual;
    });
    this.resumenDetalles.mensualidades$.subscribe( mensualidades=>{
      this.mensualidades = mensualidades;
    });
    this.resumenDetalles.montoFinanciar$.subscribe( montoFinanciar=>{
      this.montoFinanciar = montoFinanciar;
    });
    this.resumenDetalles.seguro$.subscribe( seguro=>{
      this.seguro = seguro;
    });
    this.resumenDetalles.comision$.subscribe( comision=>{
      this.comision = comision;
    });

    this.resumenDetalles.nombre$.subscribe(nombre=> this.nombre = nombre);
/*     this.resumenDetalles.celular$.subscribe(celular=> this.celular = celular);
    this.resumenDetalles.correo$.subscribe(correo=> this.correo = correo); */
    this.resumenDetalles.rfc$.subscribe(rfc=> this.rfc = rfc);
/*     this.resumenDetalles.resumen$.subscribe(status=> this.resumen = status);
    this.resumenDetalles.resumen$.subscribe(status=> this.resumen = status); */
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


@Component({
  selector: 'modal.aceptada',
  templateUrl: './modal.aceptada.html',
  styleUrls: ['./modal.aceptada.scss']
})
export class ModalAceptadaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalAceptadaComponent>, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  irSolicitudes(): void {
    this.onNoClick();
    this.router.navigate(['/solicitudes']);
  }

}

@Component({
  selector: 'modal.rechazada',
  templateUrl: './modal.rechazada.html',
  styleUrls: ['./modal.rechazada.scss']
})
export class ModalRechazadaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalRechazadaComponent>, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  irSolicitudes(): void {
    this.onNoClick();
    this.router.navigate(['/solicitudes']);
  }

}