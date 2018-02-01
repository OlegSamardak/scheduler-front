import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'form-comp',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() onTimeCustomization = new EventEmitter();

  timeCustomization = {
    group: null,
    breaks: null,
    first_day: null,
    lesson_duration: null,
    first_lesson: null,
    numberOfWeeks: null,
  };

  timeCustomizationChange(){
    this.onTimeCustomization.emit(this.timeCustomization);
  }

  selectLessonDuration(selectedLessonDuration){
    this.timeCustomization.lesson_duration = selectedLessonDuration;
    this.timeCustomizationChange();
  }

  selectNumberOfWeeks(selectedNumberOfWeeks){
    this.timeCustomization.numberOfWeeks = selectedNumberOfWeeks;
    this.timeCustomizationChange();
  }

  selectStudyBeginningDate(selectedStudyBeginningDate){
    this.timeCustomization.first_day = selectedStudyBeginningDate;
    this.timeCustomizationChange();
  }

  selectStudyBeginning(selectedStudyBeginning){
    this.timeCustomization.first_lesson = selectedStudyBeginning;
    this.timeCustomizationChange();
  }

  selectBreakDuration(breakDuration){
    this.timeCustomization.breaks = breakDuration;
    console.log(this.timeCustomization);
    this.timeCustomizationChange();
  }

  setGroup(groupName) {
    this.timeCustomization.group = groupName;
    this.timeCustomizationChange();
  }

  constructor() { }

  ngOnInit() {
  }

}
