import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/observable/of";
import {Observable} from "rxjs";

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss']
})
export class GroupSelectComponent implements OnInit {

  groupName: string;
  snackBar: MatSnackBar;
  @Output() onGroupName = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  checkingExistenceOfGroup (groupName: string): Observable<any> {
    return this.http.get<any>('/groups');
  }

  transmitGroup(groupName: string, checkExistenceOfGroup: boolean){
    this.groupName = groupName;
    this.checkingExistenceOfGroup(this.groupName);
    this.onGroupName.emit(this.groupName);
    this.openSnackbar(checkExistenceOfGroup);
  }

  openSnackbar(checkExistenceOfGroup: boolean){
    if (checkExistenceOfGroup){
      this.snackBar.open('This group exists! Create new schedule?', 'Yes', {
        duration: 2000,
      });
    }
  }

  ngOnInit() {
  }

}
