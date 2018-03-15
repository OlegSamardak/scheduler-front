import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../model/service/authorization.service';
import {ActivatedRoute, Router} from "@angular/router";
declare const gapi : any;

@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  providers: [AuthorizationService]
})
export class StartPageComponent implements OnInit {
  private authorizaed: boolean;
  constructor(private authorizationService: AuthorizationService, private rout:Router) {

  }

  authorize(){
    this.authorizationService.signIn();
  }



  ngOnInit() {
    // this.authorizationService.isAuthorized()
    // if (this.authorizationService.isAuthorized())
    //   this.rout.navigate(['/group']);
  }

}
