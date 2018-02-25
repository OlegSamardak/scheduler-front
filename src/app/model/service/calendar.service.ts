import { Injectable } from '@angular/core';
import {AuthorizationService} from "./authorization.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CalendarService {
  newCalendar: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem(AuthorizationService.SESSION_STORAGE_KEY)
    })
  };

  constructor(private http: HttpClient) { }

  createCalendarAndSetId(name: string){
    return this.http.post(`https://www.googleapis.com/calendar/v3/calendars`, {summary: name}, this.httpOptions)
  }

  createMapEventsForDay(breaks, lessonDuration, lessonBeginning){
    // let eventDates = new Map();
    // eventDates.set(Date.parse(lessonBeginning))
  }

  getAllTimesOfLessonsForWeek(breaks, lessonDuration, lessonBeginningDate, lessonBeginningTime){
    // let eventDates = new Map();
    // eventDates.set(Date.parse(lessonBeginning));
    let times = {
      start: '',
      end: ''
    };
    let beginning = new Date(lessonBeginningDate);
    let firstLessonHours;
    let firstLessonMinutes;
    firstLessonHours = lessonBeginningTime.charAt(0)+lessonBeginningTime.charAt(1);
    firstLessonMinutes = lessonBeginningTime.charAt(3)+lessonBeginningTime.charAt(4);
    console.dir(firstLessonHours);
    console.dir(firstLessonMinutes);
    beginning.setHours(+firstLessonHours);
    beginning.setMinutes(+firstLessonMinutes);
    times.start = beginning.toISOString();
    console.log(`first lesson start: `+beginning.toISOString());
    let end = beginning;
    end.setTime(beginning.getTime()+(+lessonDuration*60*1000));
    times.end = end.toISOString();
    console.log(`first lesson end: `+beginning.toISOString());
    return times;
  }

  createEvent(body){
    this.createCalendarAndSetId('test').toPromise().then(calendar =>{
      this.newCalendar = calendar;
      this.http.post(`https://www.googleapis.com/calendar/v3/calendars/${this.newCalendar.id}/events`,
        {summary: 'test',
          end:{
            dateTime: body.end,
            timeZone: 'Europe/Kiev'

          },
          start:{
            dateTime: body.start,
            timeZone: 'Europe/Kiev'
          }
        }, this.httpOptions).subscribe(event =>{
        console.info('event created: '+event);
      });
    });

  }

}
