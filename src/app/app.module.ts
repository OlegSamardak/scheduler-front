import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FormModule} from "./form/form.module";
import {ScheduleInputModule} from "./schedule-input/schedule-input.module";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from "@angular/material";


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
