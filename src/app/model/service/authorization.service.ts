import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
declare const gapi : any;

@Injectable()
export class AuthorizationService implements CanActivate{

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    gapi.load('auth2',function () {
      gapi.auth2.init()
    })
  }

  authorize(){
    // return this.http.get<any>(`http://localhost:9000/login/google`);
    let googleAuth = gapi.auth2.getAuthInstance();
    googleAuth.then(() => {
      googleAuth.signIn({scope: 'profile email https://www.googleapis.com/auth/calendar'}).then(googleUser => {
        console.log(googleUser.getBasicProfile());
      });
    });
  }

  codeForApi(code){
    return this.http.get(`http://localhost:9000/login/google?code=${code}`);
  }

  isUserLoggedIn(): boolean{
    if(localStorage.getItem('code'))
      return true;
    else
      return false;
  }

  canActivate() {
    if (this.isUserLoggedIn())
      return true;
    else{
      window.alert('Для роботи в системі вам потробно авторизуватись.');
      this.router.navigate(['/start']);
      return false;
    }
  }

}
