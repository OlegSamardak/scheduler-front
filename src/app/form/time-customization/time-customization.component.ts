import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'time-customization',
  templateUrl: './time-customization.component.html',
  styleUrls: ['./time-customization.component.scss'],
})
export class TimeCustomizationComponent implements OnInit {

  constructor(private router: Router) { }

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
    {value: '45'},
    {value: '80'}
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
  }

  toTimestamp(strDate){
    let datum = Date.parse(strDate);
    return datum/1000;
  }

  changeStudyBeginningDate(inputDate){
    this.selectedStudyBeginningDate = this.toTimestamp(inputDate);
    console.log(this.selectedStudyBeginningDate);
    this.onStudyBeginningDate.emit(this.selectedStudyBeginningDate);
  }

  changeNumberOfWeeks(numberOfWeeks){
    this.selectedNumberOfWeeks = numberOfWeeks;
    this.onNumberOfWeeks.emit(this.selectedNumberOfWeeks);
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
    this.breaks[index].selectedValue = value;
    this.onBreak.emit(this.breaks);
  }

  setStandartCHDTU(){
    this.selectedStudyBeginning = '08:30';
    this.selectedLessonDuration = '80';
    this.breaks[0].selectedValue = '10';
    this.breaks[1].selectedValue = '30';
    this.breaks[2].selectedValue = '10';
    this.breaks[3].selectedValue = '10';
    this.breaks[4].selectedValue = '10';
    this.breaks[5].selectedValue = '10';
    this.breaks[6].selectedValue = '10';
    this.breaks[7].selectedValue = '10';
  }

  setStandartCHNU(){
    this.selectedStudyBeginning = '08:00';
    this.selectedLessonDuration = '80';
    this.breaks[0].selectedValue = '20';
    this.breaks[1].selectedValue = '20';
    this.breaks[2].selectedValue = '20';
    this.breaks[3].selectedValue = '20';
    this.breaks[4].selectedValue = '15';
    this.breaks[5].selectedValue = '15';
    this.breaks[6].selectedValue = '15';
    this.breaks[7].selectedValue = '15';
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
