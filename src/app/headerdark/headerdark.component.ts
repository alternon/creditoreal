import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-headerdark',
  templateUrl: './headerdark.component.html',
  styleUrls: ['./headerdark.component.scss']
})
export class HeaderDarkComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }

}
