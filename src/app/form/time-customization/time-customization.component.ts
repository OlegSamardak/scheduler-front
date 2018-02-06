import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DataSenderService} from "../../model/service/data-sender.service";

@Component({
  selector: 'time-customization',
  templateUrl: './time-customization.component.html',
  styleUrls: ['./time-customization.component.scss'],
  providers: []
})
export class TimeCustomizationComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private dataSender: DataSenderService) { }


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
    {value: '1', selectedValue: ''},
    {value: '2', selectedValue: ''},
    {value: '3', selectedValue: ''},
    {value: '4', selectedValue: ''},
    {value: '5', selectedValue: ''},
    {value: '6', selectedValue: ''},
    {value: '7', selectedValue: ''},
    {value: '8', selectedValue: ''}
  ];

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  toTimestamp(strDate){
    const datum = Date.parse(strDate);
    return datum / 1000;
  }

  changeStudyBeginningDate(inputDate){
    this.selectedStudyBeginningDate = this.toTimestamp(inputDate);
    this.dataSender.template.first_day = this.selectedStudyBeginningDate;
    console.log(this.selectedStudyBeginningDate);
  }

  changeNumberOfWeeks(numberOfWeeks){
    this.selectedNumberOfWeeks = numberOfWeeks;
  }

  changeStudyBeginning(studyBeginning){
    this.dataSender.template.first_lesson = this.selectedStudyBeginning;
    this.selectedStudyBeginning = studyBeginning;
  }

  changeLessonDuration(lessonDuration){
    this.selectedLessonDuration = lessonDuration;
    this.dataSender.template.lesson_duration = this.selectedLessonDuration;
  }

  breakChange(index, value){
    this.breaks[index].selectedValue = value;
    this.dataSender.template.breaks = this.breaks;
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
    this.router.navigate(['/']);
  }

  nextStep() {
    this.router.navigate(['/lessons']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dataSender.template.breaks = this.breaks;
    this.dataSender.template.lesson_duration = this.selectedLessonDuration;
    this.dataSender.template.first_lesson = this.selectedStudyBeginning;
    this.dataSender.template.first_day = this.selectedStudyBeginningDate;
  }

}
