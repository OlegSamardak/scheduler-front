import {ElementRef, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import GoogleUser = gapi.auth2.GoogleUser;
import {GoogleAuthService} from "ng-gapi";
declare const gapi : any;

@Injectable()
export class AuthorizationService{
  // private redirectUri:string = 'http://localhost:4200/group';
  // private clientId:string = '684471065070-5cp2vm76ajefqvvql14krnsujd44resm.apps.googleusercontent.com';
  // private scope = [
  //   'profile',
  //   'email',
  //   'https://www.googleapis.com/auth/calendar',
  // ].join(' ');
  // public auth2: any;
  private isSignedIn : boolean;
  httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer '+sessionStorage.getItem(AuthorizationService.SESSION_STORAGE_KEY)
  })
};
  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;

  constructor(private http: HttpClient, private router: Router, private route: Router, private googleAuth: GoogleAuthService) {
  }

  public getToken(): string {
    let token: string = sessionStorage.getItem(AuthorizationService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(AuthorizationService.SESSION_STORAGE_KEY);
  }

  public signIn(): void {
    this.googleAuth.getAuth()
      .subscribe((auth) => {
        auth.signIn().then(res => this.signInSuccessHandler(res));
      });
  }

  getCalendars(){
    return this.http.get(`https://www.googleapis.com/calendar/v3/users/me/calendarList`, this.httpOptions);
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    sessionStorage.setItem(
      AuthorizationService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
    window.location.href = 'http://localhost:4200/group'
  }

  // canActivate() {
  //   if (this.isUserLoggedIn())
  //     return true;
  //   else{
  //     window.alert('Для роботи в системі вам потробно авторизуватись.');
  //     this.router.navigate(['/start']);
  //     return false;
  //   }
  // }

}
