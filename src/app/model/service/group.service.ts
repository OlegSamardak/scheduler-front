import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Group} from "../entity/group";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GroupService {

  constructor (private http: HttpClient) { }

  public checkGroupExistence(name: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:9000/groups/${name}`);
  }

}
