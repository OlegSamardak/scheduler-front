import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'break-selector',
  templateUrl: './break-selector.component.html',
  styleUrls: ['./break-selector.component.scss']
})
export class BreakSelectorComponent implements OnInit {

  @Input() lesson: string;
  @Output() onDuration = new EventEmitter();

  selectedDuration: {
    value: any;
  };

  breaksDuration = [
    {value: '5'},
    {value: '10'},
    {value: '15'},
    {value: '20'},
    {value: '25'},
    {value: '30'},
    {value: '35'},
    {value: '40'},
    {value: '45'},
    {value: '50'},
    {value: '55'},
    {value: '60'},
  ];

  durationChange(breakDuration){
    this.onDuration.emit(breakDuration.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
