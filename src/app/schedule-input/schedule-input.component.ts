
import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {DataSenderService} from '../model/service/data-sender.service';

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
  }

  copySchedule(){
    this.schedule[1] = this.schedule[0];
    console.log(this.schedule[1]);
  }

  templateFactory(){
   // this.dataSender.template.schedule_template[0][0][0].classroom = this.schedule[0].oneWeek[0].oneD;
  }

  constructor(private router: Router, public dataSender: DataSenderService) { }

  ngOnInit() {
    console.dir(this.dataSender.template);
  }

  previousStep(){
    this.router.navigate(['/time']);
  }

  nextStep(){
    this.router.navigate(['/finish']);
  }

  ngOnDestroy(){}

}
