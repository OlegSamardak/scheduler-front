import {Component, OnDestroy, OnInit} from "@angular/core";
import {AuthorizationService} from "./model/service/authorization.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthorizationService]
})
export class AppComponent implements OnInit, OnDestroy {

  code = '';
  private loggedIn = false;
  sub: Subscription;

  constructor(private authorizationService: AuthorizationService, private router: Router) {

  }

  logout(){
    this.router.navigate(['/start']);
    localStorage.removeItem('code');
    window.location.assign('https://accounts.google.com/Logout');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
