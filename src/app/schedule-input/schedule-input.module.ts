import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScheduleInputComponent} from "./schedule-input.component";
import {DayComponent} from "./day/day.component";
import {WeekSwitcherComponent} from "./week-switcher/week-switcher.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule, MatExpansionPanel, MatFormFieldModule, MatInputModule} from "@angular/material";
import {LessonComponent} from "./day/lesson/lesson.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  declarations: [ScheduleInputComponent, DayComponent, WeekSwitcherComponent, LessonComponent],
  exports:[
    ScheduleInputComponent
  ]
})
export class ScheduleInputModule { }
