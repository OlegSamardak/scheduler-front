import { Injectable } from '@angular/core';
import {AuthorizationService} from "./authorization.service";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CalendarService {
  newCalendar: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem(AuthorizationService.SESSION_STORAGE_KEY)
    })
  };
  weekLastDay: Date;

  constructor(private http: HttpClient) { }

  createCalendarAndSetId(name: string){
    return this.http.post(`https://www.googleapis.com/calendar/v3/calendars`, {summary: name}, this.httpOptions)
  }

  getAllTimesOfLessonsForDay(breaks: {selectedValue: string, empty:boolean}[], lessonDuration, lessonBeginningDate: Date, lessonBeginningTime){
    let times = [{
      start: '',
      end: ''
    }];
    let beginning = lessonBeginningDate;
    let firstLessonHours;
    let firstLessonMinutes;
    firstLessonHours = lessonBeginningTime.charAt(0)+lessonBeginningTime.charAt(1);
    firstLessonMinutes = lessonBeginningTime.charAt(3)+lessonBeginningTime.charAt(4);
    console.dir(firstLessonHours);
    console.dir(firstLessonMinutes);
    beginning.setHours(+firstLessonHours);
    beginning.setMinutes(+firstLessonMinutes);
    times[0].start = beginning.toISOString();
    console.log(`first lesson start: `+beginning.toISOString());
    let end = beginning;
    end.setTime(beginning.getTime()+(+lessonDuration*60*1000));
    times[0].end = end.toISOString();
    console.log(`first lesson end: `+beginning.toISOString());

    for(let i = 0; i<breaks.length;i++){
      let time = {
        start: '',
        end: ''
      };
      end.setTime(end.getTime()+(+breaks[i].selectedValue*60*1000));
      time.start = end.toISOString();
      end.setTime(end.getTime()+(+lessonDuration*60*1000));
      time.end = end.toISOString();
      times.push(time);
    }
    return times;
  }

  createEvent(times, numberOfWeeks){
      this.http.post(`https://www.googleapis.com/calendar/v3/calendars/${this.newCalendar.id}/events`,
        {
          summary: 'test',
          end:{
            dateTime: times.end,
            timeZone: 'Europe/Kiev'

          },
          start:{
            dateTime: times.start,
            timeZone: 'Europe/Kiev'
          },
          recurrence: [
            `RRULE:FREQ=WEEKLY;COUNT=${numberOfWeeks};INTERVAL=2`

          ]
        }, this.httpOptions).subscribe(event =>{
        console.info('event created: '+event.toString());
      },
      error =>{
        if (error instanceof HttpErrorResponse) {
          console.error('An error occurred:', error.error.message)
          window.setTimeout(()=>{
            this.createEvent(times,numberOfWeeks);
          }, 1000)
        }
      }
      );
  }

  createDay(times, numberOfWeeks){
    console.dir(times);
    for (let i = 0; i<times.length; i++){
      this.createEvent(times[i], numberOfWeeks);
    }
  }

  createWeek(breaks: {selectedValue: string, empty:boolean}[], lessonDuration, lessonBeginningDate: Date, lessonBeginningTime, numberOfWeeks){
      let dayTimes = [];
      let day = lessonBeginningDate;
      dayTimes.push(this.getAllTimesOfLessonsForDay(breaks, lessonDuration, day, lessonBeginningTime));
      for (let i = 0; i<5; i++){
        day = new Date(day.getTime()+86400000);
        dayTimes.push(this.getAllTimesOfLessonsForDay(breaks, lessonDuration, day, lessonBeginningTime));
      }
      console.log(dayTimes);
      for (let dayTime of dayTimes){
        for (let times of dayTime){
          this.createEvent(times, numberOfWeeks);
        }
      }
      this.weekLastDay = dayTimes[dayTimes.length-1][dayTimes[dayTimes.length-1].length-1].end;
      console.log(this.weekLastDay);
  }

  createTwoWeeks(breaks: {selectedValue: string, empty:boolean}[], lessonDuration, lessonBeginningDate, lessonBeginningTime, numberOfWeeks){
    this.createCalendarAndSetId('test').toPromise().then(calendar =>{
      this.newCalendar = calendar;
      let upperWeekBeginning = new Date(lessonBeginningDate);
      this.createWeek(breaks,lessonDuration,upperWeekBeginning,lessonBeginningTime,numberOfWeeks);
      let lowerWeekBeginning = new Date(this.weekLastDay);
      lowerWeekBeginning.setTime(lowerWeekBeginning.getTime()+86400000*2);
      this.createWeek(breaks,lessonDuration, lowerWeekBeginning, lessonBeginningTime,numberOfWeeks);
    });
  }
}
