import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule-input',
  templateUrl: './schedule-input.component.html',
  styleUrls: ['./schedule-input.component.scss']
})
export class ScheduleInputComponent implements OnInit {

  weeks = [
    {value: 1, name: 'Понеділок'},
    {value: 2, name: 'Вівторок'},
    {value: 3, name: 'Середа'},
    {value: 4, name: 'Четвер'},
    {value: 5, name: 'П`ятниця'},
    {value: 6, name: 'Субота'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
