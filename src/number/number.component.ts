import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  constructor() {}

  getNumbers() {
    return [21, 65, 2, 0, 78, 11, 77, 122, 907, 1]
  }

  ngOnInit() {
  }
}