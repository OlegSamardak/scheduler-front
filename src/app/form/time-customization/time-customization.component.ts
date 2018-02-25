import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DataSenderService} from "../../model/service/data-sender.service";
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CalendarService} from "../../model/service/calendar.service";

@Component({
  selector: 'time-customization',
  templateUrl: './time-customization.component.html',
  styleUrls: ['./time-customization.component.scss'],
  providers: [CalendarService]
})
export class TimeCustomizationComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private dataSender: DataSenderService, private calendarService: CalendarService) { }
  studyBeginningDayEmpty = true;
  numberOfWeeksEmpty = true;
  studyBeginningEmpty = true;
  lessonDurationEmpty = true;
  breaksEmpty = true;

  inputDate;
  group: string;
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
    {selectedValue: '', empty: true},
    {selectedValue: '', empty: true},
    {selectedValue: '', empty: true},
    {selectedValue: '', empty: true},
    {selectedValue: '', empty: true},
    {selectedValue: '', empty: true},
    {selectedValue: '', empty: true},
    {selectedValue: '', empty: true}
  ];

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 2 && day !== 3 && day !== 4&& day !== 5 && day !== 6;
  };

  checkEmpty(value: string): boolean {
    if (value == null || value === '') {
      return true;
    }
    else
      return false;
  }

  toTimestamp(strDate){
    const datum = Date.parse(strDate);
    return datum;
  }

  changeStudyBeginningDate(inputDate){
    this.selectedStudyBeginningDate = this.toTimestamp(inputDate);
    this.dataSender.template.first_day = this.selectedStudyBeginningDate;
    this.studyBeginningDayEmpty = this.checkEmpty(inputDate);
    console.log(this.selectedStudyBeginningDate);
  }

  changeNumberOfWeeks(numberOfWeeks){
    this.selectedNumberOfWeeks = numberOfWeeks;
    this.numberOfWeeksEmpty = this.checkEmpty(numberOfWeeks);
    this.dataSender.template.number_of_weeks = this.selectedNumberOfWeeks;
  }

  changeStudyBeginning(studyBeginning){
    this.selectedStudyBeginning = studyBeginning;
    this.dataSender.template.first_lesson = this.selectedStudyBeginning;
    this.studyBeginningEmpty = this.checkEmpty(studyBeginning);
  }

  changeLessonDuration(lessonDuration){
    this.selectedLessonDuration = lessonDuration;
    this.dataSender.template.lesson_duration = this.selectedLessonDuration;
    this.lessonDurationEmpty = this.checkEmpty(lessonDuration);
  }

  breakChange(index, value){
    this.breaks[index].selectedValue = value.selectedValue;
    this.breaks[index].empty = value.empty;
    this.breaksEmpty = false;
    for (let activeBreak of this.breaks){
      if (activeBreak.empty === true) {
        this.breaksEmpty = true;
        break;
      }
    }
    this.dataSender.template.breaks = this.breaks;
    console.log(this.dataSender.template);
  }

  setStandartCHDTU(){
    this.changeStudyBeginning('08:30');
    this.changeLessonDuration('80');
    this.breakChange('0', {selectedValue: '10', empty: false});
    this.breakChange('1', {selectedValue: '30', empty: false});
    this.breakChange('2', {selectedValue: '10', empty: false});
    this.breakChange('3', {selectedValue: '10', empty: false});
    this.breakChange('4', {selectedValue: '10', empty: false});
    this.breakChange('5', {selectedValue: '10', empty: false});
    this.breakChange('6', {selectedValue: '10', empty: false});
    this.breakChange('7', {selectedValue: '10', empty: false});
  }

  setStandartCHNU(){
    this.changeStudyBeginning('08:00');
    this.changeLessonDuration('80');
    this.breakChange('0', {selectedValue: '20', empty: false});
    this.breakChange('1', {selectedValue: '20', empty: false});
    this.breakChange('2', {selectedValue: '20', empty: false});
    this.breakChange('3', {selectedValue: '20', empty: false});
    this.breakChange('4', {selectedValue: '15', empty: false});
    this.breakChange('5', {selectedValue: '15', empty: false});
    this.breakChange('6', {selectedValue: '15', empty: false});
    this.breakChange('7', {selectedValue: '15', empty: false});
  }

  previousStep(){
    this.router.navigate(['/groups']);
  }

  nextStep() {
    this.calendarService.createWeek(this.breaks,this.selectedLessonDuration,this.selectedStudyBeginningDate,this.selectedStudyBeginning, this.selectedNumberOfWeeks.value)
    // this.calendarService.createDay(times);
    // this.router.navigate(['/lessons']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dataSender.template.breaks = this.breaks;
    this.dataSender.template.lesson_duration = this.selectedLessonDuration;
    this.dataSender.template.first_lesson = this.selectedStudyBeginning;
    this.dataSender.template.first_day = this.selectedStudyBeginningDate;
    this.dataSender.template.number_of_weeks = this.selectedNumberOfWeeks;
  }

}
