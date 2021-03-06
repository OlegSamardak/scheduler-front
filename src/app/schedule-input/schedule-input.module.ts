import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatTabsModule,
  MatCheckboxModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScheduleInputComponent} from "./schedule-input.component";
import {DayComponent} from "./day/day.component";
import {LessonComponent} from "./day/lesson/lesson.component";
import {WeekComponent} from "./week/week.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTabsModule,
    NgbModule,
  ],
  declarations: [ScheduleInputComponent, DayComponent, LessonComponent, WeekComponent],
  exports:[
    ScheduleInputComponent
  ]
})
export class ScheduleInputModule { }
