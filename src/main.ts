import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';
import { TimerComponent } from './timer/timer.component';
import { NumberComponent } from './number/number.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent, TimerComponent, NumberComponent],
  template: `
    <h1> {{name}} </h1>
    <app-me></app-me>
    <app-timer></app-timer>
    <app-number></app-number>
  `,
})
export class App {
  name = 'Me & Timer App';
}

bootstrapApplication(App);
