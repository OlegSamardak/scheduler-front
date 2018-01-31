import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  @Input() lessonNumber: string;
  @Output() onOneLesson = new EventEmitter();

  lesson = {
    lessonType: '',
    subject: '',
    teacher: '',
    lectureHall: '',
  };

  lessonTypes = [
    {value: 'Лекція'},
    {value: 'Практичне заняття'},
    {value: 'Семінар'},
    {value: 'Лабораторна робота'},
    {value: 'Самостійна робота'},
  ];

  lessonChange(){
    this.onOneLesson.emit(this.lesson);
  }

  constructor() { }

  ngOnInit() {
  }

}
