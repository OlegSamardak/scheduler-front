import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Output() onLesson = new EventEmitter();

  lessons = [
    {value: '1', selectedValue: ''},
    {value: '2', selectedValue: ''},
    {value: '3', selectedValue: ''},
    {value: '4', selectedValue: ''},
    {value: '5', selectedValue: ''},
    {value: '6', selectedValue: ''},
    {value: '7', selectedValue: ''},
    {value: '8', selectedValue: ''},
    {value: '9', selectedValue: ''}
  ];

  lessonChange(index, value){
    this.lessons[index].selectedValue = value;
    console.debug(this.lessons[index].selectedValue);
    this.onLesson.emit(this.lessons);
  }

  constructor() { }

  ngOnInit() {
  }

}
