import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GroupSelectComponent} from "./group-select/group-select.component";
import {FormComponent} from "./form.component";
import {TimeCustomizationComponent} from "./time-customization/time-customization.component";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [GroupSelectComponent, FormComponent, TimeCustomizationComponent],
  exports:[
    FormComponent,
  ]
})
export class FormModule { }
