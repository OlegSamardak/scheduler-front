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

  createCalendarAndGetId(){
    this.http.post(`https://www.googleapis.com/calendar/v3/calendars`, {summary: 'test'}, this.httpOptions).subscribe(calendar =>{
      this.newCalendar = calendar;
    });
  }

  createEvents(){

  }

}
