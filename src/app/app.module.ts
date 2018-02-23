import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormModule} from "./form/form.module";
import {ScheduleInputModule} from "./schedule-input/schedule-input.module";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MAT_DATE_LOCALE,
  NativeDateModule,
  MatDatepickerModule,
  MatStepperModule,
  MatDialogModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from ".//app-routing.module";
import {RouterModule} from "@angular/router";
import {EndPageComponent} from "./end-page/end-page.component";
import {DataSenderService} from "./model/service/data-sender.service";
import { StartPageComponent } from './start-page/start-page.component';
import {GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig} from "ng-gapi";

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "684471065070-5cp2vm76ajefqvvql14krnsujd44resm.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
    'profile',
    'email',
    'https://www.googleapis.com/auth/newCalendar',
    'https://www.googleapis.com/auth/newCalendar.readonly',
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    EndPageComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormModule,
    ScheduleInputModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatStepperModule,
    MatDatepickerModule,
    NativeDateModule,
    AppRoutingModule,
    MatDialogModule,
    RouterModule.forRoot([]),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'},
    DataSenderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
