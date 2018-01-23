import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupSelectComponent } from './group-select/group-select.component';
import { FormComponent } from './form.component';
import { TimeCustomizationComponent } from './time-customization/time-customization.component';
import {MatSelectModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BreakSelectorComponent } from './time-customization/break-selector/break-selector.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [GroupSelectComponent, FormComponent, TimeCustomizationComponent, BreakSelectorComponent],
  exports:[
    FormComponent
  ]
})
export class FormModule { }
