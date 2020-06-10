import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  irInicio() {
    this.router.navigate(['/solicitudes']);
  }
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
