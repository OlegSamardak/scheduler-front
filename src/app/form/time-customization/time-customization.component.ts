import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'time-customization',
  templateUrl: './time-customization.component.html',
  styleUrls: ['./time-customization.component.scss']
})
export class TimeCustomizationComponent implements OnInit {
  selectedStudyBeginning;
  selectedLessonDuration;
  studyBeginningTime = [
    {value: '08:00', isSelected: false},
    {value: '08:30', isSelected: false},
    {value: '09:00', isSelected: false},
    {value: '09:30', isSelected: false}
  ];
  lessonDuration =[
    {value: '45 хв',  isSelected: false},
    {value: '80 хв',  isSelected: false}
  ];
  breaks = [
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



  @Output() onStudyBeginning = new EventEmitter();
  @Output() onLessonDuration = new EventEmitter();
  @Output() onBreak = new EventEmitter();

  changeStudyBeginning(studyBeginning){
    this.selectedStudyBeginning = studyBeginning;
    this.onStudyBeginning.emit(this.selectedStudyBeginning);
  }

  changeLessonDuration(lessonDuration){
    this.selectedLessonDuration = lessonDuration;
    this.onLessonDuration.emit(this.selectedLessonDuration);
  }

  breakChange(index, value){
    this.breaks[index].selectedValue = value;
    console.log(this.breaks[index].selectedValue);
    this.onBreak.emit(this.breaks);
  }

  changeBreakDration(){

  }

  constructor() { }

  ngOnInit() {
  }



}
