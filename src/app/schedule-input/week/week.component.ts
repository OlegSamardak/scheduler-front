import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  @Output() onOneWeek = new EventEmitter();

  weekInWork = [
    {value: 1, name: 'Понеділок', oneDay: null},
    {value: 2, name: 'Вівторок', oneDay: null},
    {value: 3, name: 'Середа', oneDay: null},
    {value: 4, name: 'Четвер', oneDay: null},
    {value: 5, name: 'П`ятниця', oneDay: null},
    {value: 6, name: 'Субота', oneDay: null},
  ];

  week = [
    null,
    null,
    null,
    null,
    null,
    null
  ]

  weekChange(){
    this.onOneWeek.emit(this.week);
  }

  dayChange(index, day) {
    this.weekInWork[index].oneDay = day;
    this.week[index] = this.weekInWork[index].oneDay;
    this.weekChange();
  }

  constructor() { }

  ngOnInit() {
  }

}
