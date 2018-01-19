import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GroupSelectComponent} from "./group-select/group-select.component";
import {FormComponent} from "./form.component";
import {TimeCustomizationComponent} from "./time-customization/time-customization.component";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupSelectComponent, FormComponent, TimeCustomizationComponent],
  exports:[
    FormComponent,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class FormModule { }
