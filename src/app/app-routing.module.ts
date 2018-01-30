import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GroupSelectComponent} from "./form/group-select/group-select.component";
import {TimeCustomizationComponent} from "./form/time-customization/time-customization.component";
import {ScheduleInputComponent} from "./schedule-input/schedule-input.component";

const routes: Routes = [
  { path: 'group-select', component: GroupSelectComponent },
  { path: 'time-customization', component: TimeCustomizationComponent },
  { path: '', redirectTo: '/group-select', pathMatch:'full'},
  { path: 'schedule-input', component: ScheduleInputComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
