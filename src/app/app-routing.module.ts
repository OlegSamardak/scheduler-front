import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./form/form.component";
import {ScheduleInputComponent} from "./schedule-input/schedule-input.component";

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: '/form', pathMatch:'full'},
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
