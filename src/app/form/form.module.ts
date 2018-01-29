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
import {MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {BreakSelectorComponent} from "./time-customization/break-selector/break-selector.component";
import {FormsModule} from "@angular/forms";
import { DialogComponent } from './group-select/dialog/dialog.component';

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
    MatDialogModule
  ],
  declarations: [GroupSelectComponent, FormComponent, TimeCustomizationComponent, BreakSelectorComponent, DialogComponent],
  exports:[
    FormComponent,
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class FormModule{}
