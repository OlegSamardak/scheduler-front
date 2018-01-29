import {Component, OnInit} from "@angular/core";

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

  lowerWeeks = [
    {value: 1, name: 'Monday'},
    {value: 2, name: 'Tuesday'},
    {value: 3, name: 'Wednesday'},
    {value: 4, name: 'Thursday'},
    {value: 5, name: 'Friday'},
    {value: 6, name: 'Saturday'},
  ];

  upperWeeks = [
    {value: 1, name: 'Monday'},
    {value: 2, name: 'Tuesday'},
    {value: 3, name: 'Wednesday'},
    {value: 4, name: 'Thursday'},
    {value: 5, name: 'Friday'},
    {value: 6, name: 'Saturday'},
  ];

  copySchedule(){

  }

  constructor() { }

  ngOnInit() {
  }

}
