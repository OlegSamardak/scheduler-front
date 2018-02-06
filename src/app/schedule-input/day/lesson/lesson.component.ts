import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  @Output() onOneLesson = new EventEmitter();
  lessonAbsence = false;
  isLessonInputsDisabled = false;

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

  checkLessonExistence(){
    if(this.lessonAbsence) {
      this.lesson.subject = 'none';
      this.lesson.teacher = ' ';
      this.lesson.lectureHall = ' ';
      this.lesson.lessonType = ' ';
      this.isLessonInputsDisabled = true;
    }
    else {
      this.lesson.subject = ' ';
      this.isLessonInputsDisabled = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
