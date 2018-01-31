import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'form-comp',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  groupName;
  selectedLessonDuration;
  selectedStudyBeginningDate;
  selectedStudyBeginning;
  selectedNumberOfWeeks;
  selectedBreakDuration;

  selectLessonDuration(selectedLessonDuration){
    this.selectedLessonDuration = selectedLessonDuration;
    console.log(this.selectedLessonDuration);
  }

  selectNumberOfWeeks(selectedNumberOfWeeks){
    this.selectedNumberOfWeeks = selectedNumberOfWeeks;
    console.log(this.selectedNumberOfWeeks);
  }

  selectStudyBeginningDate(selectedStudyBeginningDate){
    this.selectedStudyBeginningDate = selectedStudyBeginningDate;
    console.log(this.selectedStudyBeginningDate);
  }

  selectStudyBeginning(selectedStudyBeginning){
    this.selectedStudyBeginning = selectedStudyBeginning;
    console.log(this.selectedStudyBeginning);
  }

  selectBreakDuration(breakDuration){
    this.selectedBreakDuration = breakDuration;
    console.log(this.selectedBreakDuration)
  }

  setGroup(event) {
    this.groupName = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
