import {ElementRef, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import GoogleUser = gapi.auth2.GoogleUser;
import {GoogleAuthService} from "ng-gapi";
declare const gapi : any;

@Injectable()
export class AuthorizationService implements CanActivate{

  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;

  constructor(private http: HttpClient, private googleAuth: GoogleAuthService, private router: Router) {
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

  public signOut(): void {
    this.googleAuth.getAuth()
      .subscribe(auth => {
        auth.signOut().then(res => {
          sessionStorage.removeItem(AuthorizationService.SESSION_STORAGE_KEY);
          window.location.href = 'https://scheduler-univ.herokuapp.com/start'
        })
      })
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    sessionStorage.setItem(
      AuthorizationService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
    if (AuthorizationService.SESSION_STORAGE_KEY)
      // this.router.navigate(['/group'])
      window.location.href = 'https://scheduler-univ.herokuapp.com/group'
  }

  canActivate() {
    if (sessionStorage.getItem(AuthorizationService.SESSION_STORAGE_KEY))
      return true;
    else{
      window.alert('Для роботи з системою вам потрібно авторизуватись.');
      this.router.navigate(['/start']);
      return false;
    }
  }
}
