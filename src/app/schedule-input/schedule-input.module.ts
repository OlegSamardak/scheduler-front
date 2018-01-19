import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ScheduleInputComponent} from "./schedule-input.component";
import {DayComponent} from "./day/day.component";
import {WeekSwitcherComponent} from "./week-switcher/week-switcher.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScheduleInputComponent, DayComponent, WeekSwitcherComponent],
  exports:[
    ScheduleInputComponent
  ]
})
export class ScheduleInputModule { }
