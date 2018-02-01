import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  @Output() onOneWeek = new EventEmitter();

  week = [
    {value: 1, name: 'Понеділок', oneDay: null},
    {value: 2, name: 'Вівторок', oneDay: null},
    {value: 3, name: 'Середа', oneDay: null},
    {value: 4, name: 'Четвер', oneDay: null},
    {value: 5, name: 'П`ятниця', oneDay: null},
    {value: 6, name: 'Субота', oneDay: null},
  ];

  weekChange(){
    this.onOneWeek.emit(this.week);
  }

  dayChange(index, day) {
    this.week[index].oneDay = day;
    this.weekChange();
  }

  constructor() { }

  ngOnInit() {
  }

}
