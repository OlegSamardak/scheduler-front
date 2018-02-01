import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthorizationService } from './model/service/authorization.service';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
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

  constructor(private authorizationService: AuthorizationService, private rout: ActivatedRoute) {

  }

  authorize(){
    this.authorizationService.authorize().subscribe((redirectUri) => {
      if (this.code == '' && !this.loggedIn) {
        this.loggedIn = true;
        window.location.href = redirectUri.response;
      }
    });
  }

  ngOnInit() {
    this.sub = this.rout.queryParams.subscribe(params => {
      console.log(params['code']);
      if (params['code']) {
        this.code = params['code'] || 0;
        console.log(params['code']);
      }
      else
        this.authorize();
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
