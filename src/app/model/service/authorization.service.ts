import {ElementRef, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
declare const gapi : any;

@Injectable()
export class AuthorizationService implements CanActivate{
  private redirectUri:string = 'http://localhost:4200/group';
  private clientId:string = '684471065070-5cp2vm76ajefqvvql14krnsujd44resm.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/calendar',
  ].join(' ');
  public auth2: any;
  private isSignedIn : boolean;
  constructor(private http: HttpClient, private router: Router, private route: Router, private element: ElementRef) {
    console.log('ElementRef: ', this.element);
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope,
        redirect_uri: this.redirectUri,
        ux_mode: 'popup'
      });
      this.attachSignin();
    });
  }

  public attachSignin() {
    this.auth2.signIn().then(googleUser => {
      let profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      sessionStorage.setItem('token', googleUser.getAuthResponse().id_token);
      this.router.navigate(['/group'])
    });
  }

  authorize(){
    // return this.http.get<any>(`http://localhost:9000/login/google`);
    this.googleInit();
  }

  codeForApi(code){
    return this.http.get(`http://localhost:9000/login/google?code=${code}`);
  }

  isAuthorized() {
    this.auth2.isSignedIn.listen(function (loggedIn) {
      console.log('Signin state changed to ', loggedIn);
      if (loggedIn)
        this.route.navigate(['/group']);
    });
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
