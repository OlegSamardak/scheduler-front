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

  constructor(private authorizationService: AuthorizationService, private router: Router) {

  }

  logout(){
    this.authorizationService.signOut();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
