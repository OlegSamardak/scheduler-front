import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataSenderService {

  template = {
    group: '',
    breaks: [
    ],
    first_day: null,
    lesson_duration: null,
    first_lesson: '',
    schedule_template: [

    ]
  };

  postTemplate(template: any){
    return this.http.post(`http://localhost:9000/template`, template);
  }

  constructor(private http: HttpClient) { }

}
