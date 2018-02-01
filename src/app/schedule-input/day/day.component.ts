import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Output() onOneDay = new EventEmitter();

  day = [
    {value: '1', oneLesson: null},
    {value: '2', oneLesson: null},
    {value: '3', oneLesson: null},
    {value: '4', oneLesson: null},
    {value: '5', oneLesson: null},
    {value: '6', oneLesson: null},
    {value: '7', oneLesson: null},
    {value: '8', oneLesson: null},
    {value: '9', oneLesson: null}
  ];

  dayChange(){
    this.onOneDay.emit(this.day);
  }

  lessonChange(index, lesson) {
    this.day[index].oneLesson = lesson;
    this.dayChange();
  }

  constructor() { }

  ngOnInit() {
  }

}
