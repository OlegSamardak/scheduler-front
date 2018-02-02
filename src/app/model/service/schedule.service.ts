import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ScheduleService {

  constructor(private http: HttpClient) {

    // scheduleInWork(){
    //   return this.http.get<any>(`http://localhost:9000/login/google`);
    // }

  }

}
