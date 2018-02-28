import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../entity/lesson";
import {Observable} from "rxjs/Observable";
import {QueryEncoder} from '@angular/http';

@Injectable()
export class GroupService {


  constructor (private http: HttpClient) { }

  public checkGroupExistence(name: string): Observable<boolean> {
    // encodeURIComponent()
    // name = decodeURIComponent(name);
    return this.http.post<boolean>(`http://localhost:9000/groups`, name);
  }

}
