import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  days = [
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
