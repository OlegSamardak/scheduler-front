import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  authorize(){
    this.http.get(`http://localhost:9000/login/google`);
  }

}
