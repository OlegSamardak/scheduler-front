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
    {value: '5 хв'},
    {value: '10 хв'},
    {value: '15 хв'},
    {value: '20 хв'},
    {value: '25 хв'},
    {value: '30 хв'},
    {value: '35 хв'},
    {value: '40 хв'},
    {value: '45 хв'},
    {value: '50 хв'},
    {value: '55 хв'},
    {value: '60 хв'},
  ];

  durationChange(breakDuration){
    this.onDuration.emit(breakDuration.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
