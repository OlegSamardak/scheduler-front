import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GroupSelectComponent} from "./form/group-select/group-select.component";
import {TimeCustomizationComponent} from "./form/time-customization/time-customization.component";
import {ScheduleInputComponent} from "./schedule-input/schedule-input.component";
import {EndPageComponent} from "./end-page/end-page.component";

const routes: Routes = [
  { path: '', component: GroupSelectComponent },
  { path: 'time', component: TimeCustomizationComponent },
  { path: '', redirectTo: '', pathMatch:'full'},
  { path: 'lessons', component: ScheduleInputComponent },
  { path: 'finish', component: EndPageComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
