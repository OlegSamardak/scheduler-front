import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataSenderService {

  template = {
    code: '',
    group: '',
    breaks: [
    ],
    first_day: null,
    number_of_weeks: null,
    lesson_duration: null,
    first_lesson: '',
    schedule_template: [ ]
  };

  postTemplate(template: any, code: string){
    return this.http.post(`http://localhost:9000/template/?code=${code}`, template);
  }

  constructor(private http: HttpClient) { }

}
