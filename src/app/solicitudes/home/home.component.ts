import { Component, HostBinding, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import {Router} from '@angular/router';

export interface Sucursal {
  sucursal: String
}

export interface Solicitud {
  usuario: String;
  fecha: Date;
  estatus: String;
  color: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.lista-solicitudes', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@pageAnimations')

  sucursales: Sucursal[] = [
    {
      sucursal: 'Autos Jacarandas 3'
    },
    {
      sucursal: 'Matriz'
    },
  ];

  solicitudes: Solicitud[] = [
    {
      usuario: 'Test Test Test1',
      fecha: new Date('1/17/20'),
      estatus: 'Rechazada',
      color: 'rojo'
    },
    {
      usuario: 'Test Test Test2',
      fecha: new Date('1/11/20'),
      estatus: 'En proceso',
      color: 'naranja'
    },
    {
      usuario: 'Test Test Test3',
      fecha: new Date('1/09/20'),
      estatus: 'Condicionado',
      color: 'amarillo'
    },
    {
      usuario: 'Test Test Test4',
      fecha: new Date('1/5/20'),
      estatus: 'Condicionado',
      color: 'amarillo'
    },
    {
      usuario: 'Test Test Test5',
      fecha: new Date('1/2/20'),
      estatus: 'Autorizada',
      color: 'verde'
    }
  ];

  selected = this.sucursales[0].sucursal;

  nuevaSolicitud(): void {
    this.router.navigate(['/cotizacion']);
  }

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
