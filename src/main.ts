import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent],
  template: `
    <h1> {{name}} </h1>
    <app-me></app-me>
  `,
})
export class App {
  name = 'Me & Timer App';
}

bootstrapApplication(App);
