import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../model/service/authorization.service';
declare const gapi : any;

@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  providers: [AuthorizationService]
})
export class StartPageComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) {

  }

  authorize(){
    // this.authorizationService.authorize().subscribe((redirectUri) => {
    //     window.location.href = redirectUri.response;
    // });
    this.authorizationService.authorize();
  }



  ngOnInit() {
  }

}
