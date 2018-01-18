import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupSelectComponent } from './group-select/group-select.component';
import { FormComponent } from './form.component';
import { TimeCustomizationComponent } from './time-customization/time-customization.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupSelectComponent, FormComponent, TimeCustomizationComponent]
})
export class FormModule { }
