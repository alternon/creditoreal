import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  minutes: number;
  seconds: number;

  constructor() { 
    this.resetTimer();
    setInterval(() => this.thick(),1000);
  }

  resetTimer(): void {
    this.minutes = 3;
    this.seconds = 59;
  }

  private thick(): void {
    if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
        this.resetTimer();
      }
    }
  }

  ngOnInit() {
  }

}
