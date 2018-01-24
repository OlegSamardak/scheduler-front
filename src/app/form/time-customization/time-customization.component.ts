import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'time-customization',
  templateUrl: './time-customization.component.html',
  styleUrls: ['./time-customization.component.scss']
})
export class TimeCustomizationComponent implements OnInit {
  selectedStudyBeginningDate;
  selectedNumberOfWeeks;
  selectedStudyBeginning;
  selectedLessonDuration;

  numberOfWeeks = [
    {value: '10'},
    {value: '11'},
    {value: '12'},
    {value: '13'},
    {value: '14'},
    {value: '15'},
    {value: '16'},
    {value: '17'},
    {value: '18'},
    {value: '19'},
    {value: '20'}
  ];
  studyBeginningTime = [
    {value: '08:00'},
    {value: '08:30'},
    {value: '09:00'},
    {value: '09:30'}
  ];
  lessonDuration =[
    {value: '45 хв'},
    {value: '80 хв'}
  ];
  oddBreaks = [
    {value: '1', selectedValue: ''},
    {value: '3', selectedValue: ''},
    {value: '5', selectedValue: ''},
    {value: '7', selectedValue: ''},
    ];

  evenBreaks = [
    {value: '2', selectedValue: ''},
    {value: '4', selectedValue: ''},
    {value: '6', selectedValue: ''},
    {value: '8', selectedValue: ''},
  ];

  @Output() onSelectedNumberOfWeeks = new EventEmitter();
  @Output() onStudyBeginningDate = new EventEmitter();
  @Output() onStudyBeginning = new EventEmitter();
  @Output() onLessonDuration = new EventEmitter();
  @Output() onOddBreak = new EventEmitter();
  @Output() onEvenBreak = new EventEmitter();

  changeStudyDateBeginning(studyBeginningDate){
    this.selectedStudyBeginningDate = studyBeginningDate;
    this.onStudyBeginningDate.emit(this.selectedStudyBeginningDate);
  }

  changeNumberOfWeeks(numberOfWeeks){
    this.selectedNumberOfWeeks = numberOfWeeks;
    this.onSelectedNumberOfWeeks.emit(this.selectedNumberOfWeeks);
  }

  changeStudyBeginning(studyBeginning){
    this.selectedStudyBeginning = studyBeginning;
    this.onStudyBeginning.emit(this.selectedStudyBeginning);
  }

  changeLessonDuration(lessonDuration){
    this.selectedLessonDuration = lessonDuration;
    this.onLessonDuration.emit(this.selectedLessonDuration);
  }

  breakChange(index, value){
    this.oddBreaks[index].selectedValue = value;
    this.evenBreaks[index].selectedValue = value;
    console.log(this.oddBreaks[index].selectedValue);
    console.log(this.evenBreaks[index].selectedValue);
    this.onOddBreak.emit(this.oddBreaks);
    this.onEvenBreak.emit(this.evenBreaks);
  }

  constructor() { }

  ngOnInit() {
  }



}
