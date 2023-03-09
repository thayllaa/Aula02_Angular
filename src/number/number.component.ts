import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: true,
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  getNumbers() {
    return [21, 65, 2, 0, 78, 11, 77, 122, 907, 1]
  }

  ngOnInit() {
  }
}