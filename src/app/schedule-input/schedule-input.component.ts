import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DataSenderService} from "../model/service/data-sender.service";

@Component({
  selector: 'schedule-input',
  templateUrl: './schedule-input.component.html',
  styleUrls: ['./schedule-input.component.scss'],
  providers: []
})
export class ScheduleInputComponent implements OnInit, OnDestroy {

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
    this.dataSender.template.schedule_template = this.schedule;
    console.log(this.dataSender.template);
  }

  copySchedule(){
    this.weekChange(1, this.schedule[0]);
  }

  templateFactory() {
    this.dataSender.template.schedule_template = this.schedule;
    this.dataSender.postTemplate(this.dataSender.template, localStorage.getItem('code')).subscribe();
    this.router.navigate(['/finish']);
  }

  constructor(private router: Router, public dataSender: DataSenderService) { }

  ngOnInit() {  }

  previousStep(){
    this.router.navigate(['/time']);
  }

  ngOnDestroy(){}

}
