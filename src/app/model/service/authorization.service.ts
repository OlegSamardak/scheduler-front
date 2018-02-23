import {ElementRef, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
declare const gapi : any;

@Injectable()
export class AuthorizationService implements CanActivate{
  private clientId:string = '684471065070-5cp2vm76ajefqvvql14krnsujd44resm.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/calendar',
  ].join(' ');
  public auth2: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private element: ElementRef) {
    console.log('ElementRef: ', this.element);
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        // localStorage.setItem('token', googleUser.getAuthResponse().id_token)
        // ...
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  authorize(){
    // return this.http.get<any>(`http://localhost:9000/login/google`);
    this.googleInit();
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
