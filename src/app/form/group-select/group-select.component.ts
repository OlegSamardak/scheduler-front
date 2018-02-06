import {Component, OnInit, OnDestroy} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material";
import "rxjs/add/observable/of";
import {GroupService} from "../../model/service/group.service";
import {Router} from "@angular/router";
import {DataSenderService} from "../../model/service/data-sender.service";
import {DialogComponent} from "./dialog/dialog.component";

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss'],
  providers: [GroupService, MatDialog]
})
export class GroupSelectComponent implements OnInit, OnDestroy {

  acceptGroup: boolean;
  groupName: string;
  dialogRef: MatDialogRef<DialogComponent>;

  constructor(private groupService: GroupService, public dialog: MatDialog, private router: Router, public dataSender: DataSenderService) {
    this.acceptGroup = false;
   }

  transmitGroup(groupName: string) {
    this.groupName = groupName;
    this.dataSender.template.group = groupName;
  }

  openDialog(accept): void {
    if (accept) this.dialogRef = this.dialog.open(DialogComponent, {
        data: {accept: this.acceptGroup}
    });
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {accept: this.acceptGroup}
    });
  }

  checkExistence(name: string) {
    this.groupService.checkGroupExistence(name).subscribe(accept => this.acceptGroup = accept);
    this.transmitGroup(name);
    this.openDialog(this.acceptGroup);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.dataSender.template.group = this.groupName;
    console.log(this.dataSender.template.group);
  }
}
