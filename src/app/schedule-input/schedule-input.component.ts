import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'schedule-input',
  templateUrl: './schedule-input.component.html',
  styleUrls: ['./schedule-input.component.scss']
})
export class ScheduleInputComponent implements OnInit {

  scheduleInWork = [
    {name: 'UpperWeek', oneWeek: null},
    {name: 'LowerWeek', oneWeek: null},
  ];

  schedule = [
    null,
    null,
  ];

  weekChange(index, week){
    this.scheduleInWork[index].oneWeek = week;
    this.schedule[index] = this.scheduleInWork[index].oneWeek;
  }

  copySchedule(){
    this.schedule[1] = this.schedule[0];
    console.log(this.schedule[1]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previousStep(){
    this.router.navigate(['/time']);
  }

  nextStep(){
    this.router.navigate(['/finish']);
  }

}
