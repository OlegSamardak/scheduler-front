import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './model/service/authorization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthorizationService]
})
export class AppComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) {

  }

  ngOnInit() {
    this.authorizationService.authorize().subscribe((redirectUri) => window.location.href = redirectUri.response);
  }
}
 
