import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  @Input() lessonNumber: string;
  @Output() onLessonType = new EventEmitter();
  @Output() onSubject = new EventEmitter();
  @Output() onTeacher = new EventEmitter();
  @Output() onLectureHall = new EventEmitter();
  subject: string;
  teacher: string;
  lectureHall: string;

  selectedLessonType: {
    value: any;
  };

  lessonType = [
    {value: 'Лекція'},
    {value: 'Практичне заняття'},
    {value: 'Семінар'},
    {value: 'Лабораторна робота'},
    {value: 'Самостійна робота'},
  ];

  lessonTypeChange(lessonType){
    this.onLessonType.emit(lessonType.value);
  }

  subjectChange(subject){
    this.onSubject.emit(subject.value);
  }

  teacherChange(teacher){
    this.onTeacher.emit(teacher.value);
  }

  lectureHallChange(lectureHall){
    this.onLectureHall.emit(lectureHall.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
