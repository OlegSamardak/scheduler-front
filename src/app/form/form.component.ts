import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'form-comp',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selectedLessonDuration;
  selectedStudyBeginningDate;
  selectedStudyBeginning;
  selectedNumberOfWeeks;
  selectedBreakDuration;

  nextStep(){ }

  selectLessonDuration(selectedDuration){
    this.selectedLessonDuration = selectedDuration;
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

  constructor() { }

  groupName: string;

  ngOnInit() {
  }

  setGroup(event) {
    this.groupName = event;
  }

}
