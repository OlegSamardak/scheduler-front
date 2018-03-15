import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DataSenderService} from "../model/service/data-sender.service";
import {CalendarService} from "../model/service/calendar.service";

@Component({
  selector: 'schedule-input',
  templateUrl: './schedule-input.component.html',
  styleUrls: ['./schedule-input.component.scss'],
  providers: [CalendarService]
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
  }

  copySchedule(){
    this.weekChange(1, this.schedule[0]);
    console.log(this.dataSender.template);
  }

  templateFactory() {
    this.dataSender.template.schedule_template = this.schedule;
    // this.dataSender.postTemplate(this.dataSender.template, localStorage.getItem('code')).subscribe();
    console.dir(this.dataSender.template);
    this.calendarService.createTwoWeeks(this.dataSender.template.breaks,this.dataSender.template.lesson_duration,this.dataSender.template.first_day,this.dataSender.template.first_lesson, this.dataSender.template.number_of_weeks, this.dataSender.template.schedule_template, this.dataSender.template.group);
    this.router.navigate(['/finish']);
  }

  constructor(private router: Router, public dataSender: DataSenderService, private calendarService: CalendarService) { }

  ngOnInit() {  }

  previousStep(){
    this.router.navigate(['/time']);
  }

  ngOnDestroy(){}

}
