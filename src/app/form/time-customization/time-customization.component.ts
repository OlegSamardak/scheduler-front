import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-customization',
  templateUrl: './time-customization.component.html',
  styleUrls: ['./time-customization.component.scss']
})
export class TimeCustomizationComponent implements OnInit {
  studyBeginningTime = [
    {value: '08:00'},
    {value: '08:30'},
    {value: '09:00'},
    {value: '09:30'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
