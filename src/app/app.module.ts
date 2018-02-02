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
  MatStepperModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from ".//app-routing.module";
import {RouterModule} from "@angular/router";
import {DataSenderService} from './model/service/data-sender.service';

@NgModule({
  declarations: [
    AppComponent
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
    RouterModule.forRoot([])
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'},
    DataSenderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
