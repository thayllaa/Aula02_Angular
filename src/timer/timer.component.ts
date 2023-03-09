import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  counter: number = 0;

  constructor() {
    const timer = setInterval(() => {
      this.counter = this.counter + 1;
    }, 100);
  }

  getSec() {
    return Math.trunc(this.counter % 60);
  }

  getMin() {
    return Math.trunc(this.counter/60);
  }

  ngOnInit() {
  }

}