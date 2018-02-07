import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GroupSelectComponent} from "./form/group-select/group-select.component";
import {TimeCustomizationComponent} from "./form/time-customization/time-customization.component";
import {ScheduleInputComponent} from "./schedule-input/schedule-input.component";
import {EndPageComponent} from "./end-page/end-page.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {AuthorizationService} from './model/service/authorization.service';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'group', component: GroupSelectComponent },
  { path: 'time', component: TimeCustomizationComponent, canActivate: [AuthorizationService] },
  { path: '', redirectTo: '/start', pathMatch:'full'},
  { path: 'lessons', component: ScheduleInputComponent, canActivate: [AuthorizationService]  },
  { path: 'finish', component: EndPageComponent, canActivate: [AuthorizationService]  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthorizationService]
})
export class AppRoutingModule { }
