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

  schedule = [
    {name: 'UpperWeek', oneWeek: null},
    {name: 'LowerWeek', oneWeek: null},
  ];

  weekChange(index, week){
    this.schedule[index].oneWeek = week;
  }

  copySchedule(){
    this.schedule[1].oneWeek = this.schedule[0].oneWeek;
    console.log(this.schedule[1].oneWeek);
  }

  templateFactory(){
   // this.dataSender.template.schedule_template[0][0][0].classroom = this.schedule[0].oneWeek[0].oneD;
  }

  constructor(private router: Router, public dataSender: DataSenderService) { }

  ngOnInit() {
    console.dir(this.dataSender);
  }

  previousStep(){
    this.router.navigate(['/time']);
  }

  ngOnDestroy(){
  }

}
