import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timeLeft: number = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  start(): void {
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pause(): void {
    clearInterval(this.interval);
  }

  reset(): void {
    clearInterval(this.interval);
    this.timeLeft = 0;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
