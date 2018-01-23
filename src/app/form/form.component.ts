import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'form-comp',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selectedLessonDuration;
  selectedStudyBeginning;
  selectedBreakDuration;
  selectLessonDuration(selectedDuration){
    this.selectedLessonDuration = selectedDuration;
    console.log(this.selectedLessonDuration);
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
    console.log(this.groupName);
  }

}
