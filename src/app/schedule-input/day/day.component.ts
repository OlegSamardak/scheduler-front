import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Output() onLesson = new EventEmitter();
  @Output() onOneDay = new EventEmitter();

  day = [
    {value: '1', selectedValue: '', oneLesson: ''},
    {value: '2', selectedValue: '', oneLesson: ''},
    {value: '3', selectedValue: '', oneLesson: ''},
    {value: '4', selectedValue: '', oneLesson: ''},
    {value: '5', selectedValue: '', oneLesson: ''},
    {value: '6', selectedValue: '', oneLesson: ''},
    {value: '7', selectedValue: '', oneLesson: ''},
    {value: '8', selectedValue: '', oneLesson: ''},
    {value: '9', selectedValue: '', oneLesson: ''}
  ];

  dayChange(){
    this.onOneDay.emit(this.day);
  }

  lessonNumberChange(index, value){
    this.day[index].selectedValue = value;
    this.onLesson.emit(this.day);
  }

  lessonChange(index, lesson) {
    this.day[index].oneLesson = lesson;
    this.dayChange();
  }

  constructor() { }

  ngOnInit() {
  }

}
