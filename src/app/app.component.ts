import {Component, OnDestroy, OnInit} from "@angular/core";
import {AuthorizationService} from "./model/service/authorization.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthorizationService]
})
export class AppComponent implements OnInit, OnDestroy {

  groupName;
  timeCustomization;

  code = '';
  private loggedIn = false;
  sub: Subscription;

  constructor(private authorizationService: AuthorizationService, private route: ActivatedRoute) {

  }

  setGroup(groupName) {
    this.groupName = groupName;
    console.log(this.groupName);
  }

  setTimeCustomization(timeCustomization) {
    this.timeCustomization = timeCustomization;
    console.log(this.timeCustomization);
  }

  authorize(){
    this.authorizationService.authorize().subscribe((redirectUri) => {
      if (this.code == '') {
        window.location.href = redirectUri.response;
      }
    });
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      console.log(params['code']);
      if (params['code']) {
        this.code = params['code'] || 0;
        localStorage.setItem('code', this.code);
        // this.authorizationService.codeForApi(this.code).subscribe(response => console.log('logged in'));
      }
      else
        this.authorize();
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
