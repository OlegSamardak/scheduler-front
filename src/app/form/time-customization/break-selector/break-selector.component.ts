import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'break-selector',
  templateUrl: './break-selector.component.html',
  styleUrls: ['./break-selector.component.scss']
})
export class BreakSelectorComponent implements OnInit {

  studyBeginningTime = [
    {value: '5 хв'},
    {value: ''},
    {value: '09:00'},
    {value: '09:30'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
