import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'form-comp',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  groupName: string;

  ngOnInit() {
  }

  setGroup(event) {
    this.groupName = event;
    console.log(this.groupName);
  }

}
