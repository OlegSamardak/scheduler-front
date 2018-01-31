import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  authorize(){
    return this.http.get(`http://localhost:9000/login/google`);
  }

  codeForApi(uri){
    return this.http.post(uri);
  }

}
