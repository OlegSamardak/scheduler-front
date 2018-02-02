import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  @Output() onOneLesson = new EventEmitter();

  lesson = {
    lessonType: null,
    subject: null,
    teacher: null,
    lectureHall: null,
  };

  lessonTypes = [
    'Лекція',
    'Практичне заняття',
    'Семінар',
    'Лабораторна робота',
    'Самостійна робота',
  ];

  lessonChange(){
    this.onOneLesson.emit(this.lesson);
  }

  constructor() { }

  ngOnInit() {
  }

}
