import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Router} from '@angular/router';
import {DataSenderService} from '../../model/service/data-sender.service';

@Component({
  selector: 'time-customization',
  templateUrl: './time-customization.component.html',
  styleUrls: ['./time-customization.component.scss'],
  providers: [DataSenderService]
})
export class TimeCustomizationComponent implements OnInit {

  constructor(private router: Router, private dataSenser: DataSenderService) { }

  inputDate;

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
    {value: '2'},
    {value: '4'},
    {value: '6'},
    {value: '8'},
  ];

  evenBreaks = [
    {value: '1'},
    {value: '3'},
    {value: '5'},
    {value: '7'},
  ];

  breaks = [
    {value: '1', selectedValue: ''},
    {value: '2', selectedValue: ''},
    {value: '3', selectedValue: ''},
    {value: '4', selectedValue: ''},
    {value: '5', selectedValue: ''},
    {value: '6', selectedValue: ''},
    {value: '7', selectedValue: ''},
    {value: '8', selectedValue: ''}
  ];

  @Output() onNumberOfWeeks = new EventEmitter();
  @Output() onStudyBeginningDate = new EventEmitter();
  @Output() onStudyBeginning = new EventEmitter();
  @Output() onLessonDuration = new EventEmitter();
  @Output() onBreak = new EventEmitter();

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  toTimestamp(strDate){
    let datum = Date.parse(strDate);
    return datum/1000;
  }

  changeStudyBeginningDate(inputDate){
    this.selectedStudyBeginningDate = this.toTimestamp(inputDate);
    this.dataSenser.template.first_day = this.selectedStudyBeginningDate;
    console.log(this.selectedStudyBeginningDate);
    this.onStudyBeginningDate.emit(this.selectedStudyBeginningDate);
  }

  changeNumberOfWeeks(numberOfWeeks){
    this.selectedNumberOfWeeks = numberOfWeeks;
    this.onNumberOfWeeks.emit(this.selectedNumberOfWeeks);
  }

  changeStudyBeginning(studyBeginning){
    this.dataSenser.template.first_lesson = this.selectedStudyBeginning;
    this.selectedStudyBeginning = studyBeginning;
    this.onStudyBeginning.emit(this.selectedStudyBeginning);
  }

  changeLessonDuration(lessonDuration){
    this.selectedLessonDuration = lessonDuration;
    this.dataSenser.template.lesson_duration = this.selectedLessonDuration;
    this.onLessonDuration.emit(this.selectedLessonDuration);
  }

  breakChange(index, value){
    this.breaks[index].selectedValue = value;
    this.dataSenser.template.breaks = this.breaks;
    // this.onBreak.emit(this.breaks);
  }

  previousStep(){
    this.router.navigate(['/group']);
  }

  nextStep(){
    this.router.navigate(['/lessons']);
  }

  ngOnInit() {
  }

}
