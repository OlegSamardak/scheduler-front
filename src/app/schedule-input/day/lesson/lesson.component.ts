import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  @Output() onOneLesson = new EventEmitter();
  @Input() lessonAbsence = false;

  @Input() lesson = {
    lessonType: null,
    subject: null,
    teacher: null,
    lectureHall: null,
  };

  lessonTypes = [
    {value: 'Лекція', styles : {
        'background-color': '#7ae7bf',
      }},
    {value: 'Практичне заняття', styles : {
        'background-color': '#00C3D5',
      }},
    {value: 'Семінар', styles : {
        'background-color': '#FFE135',
      }},
    {value: 'Лабораторна робота', styles : {
        'background-color': '#F9A7B0',
      }},
    {value: 'Самостійна робота', styles : {
        'background-color': '#F28500',
      }},
  ];

  lessonChange(){
    this.onOneLesson.emit(this.lesson);
  }

  checkLessonExistence(){
    if(this.lessonAbsence) {
      this.lesson.subject = 'none';
      this.lesson.teacher = '';
      this.lesson.lectureHall = '';
      this.lesson.lessonType = '';
    }
    else {
      this.lesson.subject = '';
    }
    this.onOneLesson.emit(this.lesson);
  }

  constructor() { }

  ngOnInit() {
  }

}
