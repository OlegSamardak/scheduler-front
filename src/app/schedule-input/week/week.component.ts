import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  week = [
    {value: 1, name: 'Понеділок', oneDay: ''},
    {value: 2, name: 'Вівторок', oneDay: ''},
    {value: 3, name: 'Середа', oneDay: ''},
    {value: 4, name: 'Четвер', oneDay: ''},
    {value: 5, name: 'П`ятниця', oneDay: ''},
    {value: 6, name: 'Субота', oneDay: ''},
  ];

  dayChange(index, day) {
    this.week[index].oneDay = day;
    console.log(this.week[index]);
  }

  constructor() { }

  ngOnInit() {
  }

}
