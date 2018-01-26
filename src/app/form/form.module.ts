import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {GroupSelectComponent} from "./group-select/group-select.component";
import {FormComponent} from "./form.component";
import {TimeCustomizationComponent} from "./time-customization/time-customization.component";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule} from "@angular/material";
import {BreakSelectorComponent} from "./time-customization/break-selector/break-selector.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [GroupSelectComponent, FormComponent, TimeCustomizationComponent, BreakSelectorComponent],
  exports:[
    FormComponent,
  ]
})
export class FormModule {

}
