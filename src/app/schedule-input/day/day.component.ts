import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Output() onOneDay = new EventEmitter();
  emptyDay = false;

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

  emptyLessons = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  dayChange(){
    this.onOneDay.emit(this.day);
  }

  lessonChange(index, lesson) {
    this.dayInWork[index].oneLesson = lesson;
    this.day[index] = this.dayInWork[index].oneLesson;
    this.dayChange();
  }

  setEmptyDay(){
    if(this.emptyDay){
      for(var  _i = 0; _i<this.emptyLessons.length; _i++){
        this.emptyLessons[_i] = true;
        this.lessonChange(_i, {
          lessonType: '',
          subject: 'none',
          teacher: '',
          lectureHall: '',
        });
      }
    }
    else {
      for(var  _i = 0; _i<this.emptyLessons.length; _i++){
        this.emptyLessons[_i] = false;
        this.lessonChange(_i, {
          lessonType: '',
          subject: '',
          teacher: '',
          lectureHall: '',
        });
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
