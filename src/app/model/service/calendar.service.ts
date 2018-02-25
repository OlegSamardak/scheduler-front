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

  getAllTimesOfLessonsForWeek(breaks: {selectedValue: string, empty:boolean}[], lessonDuration, lessonBeginningDate, lessonBeginningTime){
    let times = [{
      start: '',
      end: ''
    }];
    let beginning = new Date(lessonBeginningDate);
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

  createEvent(times){
      this.http.post(`https://www.googleapis.com/calendar/v3/calendars/${this.newCalendar.id}/events`,
        {summary: 'test',
          end:{
            dateTime: times.end,
            timeZone: 'Europe/Kiev'

          },
          start:{
            dateTime: times.start,
            timeZone: 'Europe/Kiev'
          }
        }, this.httpOptions).subscribe(event =>{
        console.info('event created: '+event.toString());
      });
  }

  createDay(times){
    this.createCalendarAndSetId('test').toPromise().then(calendar => {
      this.newCalendar = calendar;
      console.dir(times);
      for (let i = 0; i<times.length; i++){
        this.createEvent(times[i]);

      }
    });
  }
}
