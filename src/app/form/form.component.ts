import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'form-comp',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() onTimeCustomization = new EventEmitter();

  timeCustomization = {
    groupName: null,
    selectedLessonDuration: null,
    selectedStudyBeginningDate: null,
    selectedStudyBeginning: null,
    selectedNumberOfWeeks: null,
    selectedBreakDuration: null,
  };

  timeCustomizationChange(){
    this.onTimeCustomization.emit(this.timeCustomization);
  }

  selectLessonDuration(selectedLessonDuration){
    this.timeCustomization.selectedLessonDuration = selectedLessonDuration;
    this.timeCustomizationChange();
  }

  selectNumberOfWeeks(selectedNumberOfWeeks){
    this.timeCustomization.selectedNumberOfWeeks = selectedNumberOfWeeks;
    this.timeCustomizationChange();
  }

  selectStudyBeginningDate(selectedStudyBeginningDate){
    this.timeCustomization.selectedStudyBeginningDate = selectedStudyBeginningDate;
    this.timeCustomizationChange();
  }

  selectStudyBeginning(selectedStudyBeginning){
    this.timeCustomization.selectedStudyBeginning = selectedStudyBeginning;
    this.timeCustomizationChange();
  }

  selectBreakDuration(breakDuration){
    this.timeCustomization.selectedBreakDuration = breakDuration;
    this.timeCustomizationChange();
  }

  setGroup(groupName) {
    this.timeCustomization.groupName = groupName;
    this.timeCustomizationChange();
  }

  constructor() { }

  ngOnInit() {
  }

}
