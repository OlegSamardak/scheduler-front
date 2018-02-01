import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'schedule-input',
  templateUrl: './schedule-input.component.html',
  styleUrls: ['./schedule-input.component.scss']
})
export class ScheduleInputComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previousStep(){
    this.router.navigate(['/time']);
  }

}
