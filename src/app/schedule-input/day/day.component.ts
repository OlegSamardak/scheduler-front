import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Output() onOneDay = new EventEmitter();

  dayInWork = [
    {oneLesson: null},
    {oneLesson: null},
    {oneLesson: null},
    {oneLesson: null},
    {oneLesson: null},
    {oneLesson: null},
    {oneLesson: null},
    {oneLesson: null},
    {oneLesson: null}
  ];

  day = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  dayChange(){
    this.onOneDay.emit(this.day);
  }

  lessonChange(index, lesson) {
    this.dayInWork[index].oneLesson = lesson;
    this.day[index] = this.dayInWork[index].oneLesson;
    this.dayChange();
  }

  constructor() { }

  ngOnInit() {
  }

}
