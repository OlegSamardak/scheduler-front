import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CanActivate} from "@angular/router";

@Injectable()
export class AuthorizationService implements CanActivate{

  constructor(private http: HttpClient) { }

  authorize(){
    return this.http.get<any>(`http://localhost:9000/login/google`);
  }

  codeForApi(code){
    return this.http.get(`http://localhost:9000/login/google?code=${code}`);
  }

  isUserLoggedIn(): boolean{
    if (localStorage.getItem('code')) {
      return true;
    } else {
      return false;
    }
  }

  canActivate() {
    return this.isUserLoggedIn();
  }

}
