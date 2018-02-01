import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  groupName;
  timeCustomization;

  setGroup(groupName) {
    this.groupName = groupName;
    console.log(this.groupName);
  }

  setTimeCustomization(timeCustomization) {
    this.timeCustomization = timeCustomization;
    console.log(this.timeCustomization);
  }

}
