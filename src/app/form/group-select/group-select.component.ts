import {Component, OnInit, OnDestroy} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material";
import "rxjs/add/observable/of";
import {GroupService} from "../../model/service/group.service";
import {ActivatedRoute, Router} from '@angular/router';
import {DataSenderService} from "../../model/service/data-sender.service";
import {DialogComponent} from "./dialog/dialog.component";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss'],
  providers: [GroupService, MatDialog]
})
export class GroupSelectComponent implements OnInit, OnDestroy {
  sub: Subscription;
  code: '';
  acceptGroup: boolean;
  groupName: string;
  dialogRef: MatDialogRef<DialogComponent>;

  constructor(private groupService: GroupService, public dialog: MatDialog, private router: Router, public dataSender: DataSenderService, private route: ActivatedRoute) {
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
    this.sub = this.route.queryParams.subscribe(params => {
      console.log(params['code']);
      if (params['code']) {
        this.code = params['code'] || 0;
        localStorage.setItem('code', this.code);
        // this.authorizationService.codeForApi(this.code).subscribe(response => console.log('logged in'));
      }
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.dataSender.template.group = this.groupName;
    console.log(this.dataSender.template.group);
  }
}
