import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {MatDialog, MatSnackBar} from "@angular/material";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/observable/of";
import {Observable} from "rxjs";
import {GroupService} from "../../model/service/group.service";
import {DialogComponent} from "./dialog/dialog.component";

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss'],
  providers: [GroupService, MatDialog]
})
export class GroupSelectComponent implements OnInit {
  acceptGroup: boolean;
  groupName: string;
  @Output() onGroupName = new EventEmitter<string>();

  constructor(private groupService: GroupService, public dialog: MatDialog) { }

  transmitGroup(groupName: string){
    this.groupName = groupName;
    this.onGroupName.emit(this.groupName);
    //console.log(groupName);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, );
  }



  checkExistence(name: string){
    // this.groupService.checkGroupExistence(name).subscribe(accept => this.acceptGroup = accept);
    this.openDialog();
  }

  ngOnInit() {
  }

}
